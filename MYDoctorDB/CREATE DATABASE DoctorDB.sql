
-- =============================================
-- CREATE DATABASE DoctorDB
-- =============================================
IF NOT EXISTS (SELECT 1
FROM sys.databases
WHERE name = N'DoctorDB')
BEGIN
    CREATE DATABASE DoctorDB;
END;
GO

USE DoctorDB

-- =============================================
-- CORE ENTITIES
-- =============================================

-- Users Table
CREATE TABLE users
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) ,
    google_id_hash VARCHAR(255) ,
    is_active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
CREATE INDEX idx_users_email ON users(email);

GO

-- User Roles Table (Multi-role support)
CREATE TABLE user_roles
(
    user_id UNIQUEIDENTIFIER NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    PRIMARY KEY (user_id, role),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT chk_user_roles CHECK (role IN ('admin', 'doctor', 'nurse', 'receptionist', 'patient'))
);
GO

-- Patients Table
CREATE TABLE patients
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10),
    phone VARCHAR(20),
    email VARCHAR(255),
    blood_type VARCHAR(5),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
CREATE INDEX idx_patients_name ON patients(last_name, first_name);
CREATE INDEX idx_patients_phone ON patients(phone);
CREATE INDEX idx_patients_email ON patients(email);
GO

-- Patient Insurances Junction Table
CREATE TABLE patient_insurances
(
    patient_id UNIQUEIDENTIFIER NOT NULL,
    insurance_id UNIQUEIDENTIFIER NOT NULL,
    policy_number VARCHAR(100) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    PRIMARY KEY (patient_id, insurance_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (insurance_id) REFERENCES insurances(id) ON DELETE CASCADE
);

GO

-- Insurances Table
CREATE TABLE insurances
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    provider_name VARCHAR(255) UNIQUE NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
GO

-- Patient Allergies Junction Table
CREATE TABLE patient_allergies
(
    patient_id UNIQUEIDENTIFIER NOT NULL,
    allergy_id UNIQUEIDENTIFIER NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    status VARCHAR(50) DEFAULT 'active',
    PRIMARY KEY (patient_id, allergy_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (allergy_id) REFERENCES allergies(id) ON DELETE CASCADE,
    CONSTRAINT chk_allergy_status CHECK (status IN ('active', 'resolved', 'unknown'))
);
GO

-- Allergies Table
CREATE TABLE allergies
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    name VARCHAR(255) NOT NULL UNIQUE

)
GO

CREATE TABLE medical_conditions
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    name VARCHAR(255) NOT NULL UNIQUE
);
GO

CREATE TABLE patient_medical_conditions
(
    patient_id UNIQUEIDENTIFIER NOT NULL,
    condition_id UNIQUEIDENTIFIER NOT NULL,
    diagnosed_date DATE,
    status VARCHAR(50) DEFAULT 'active',
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    PRIMARY KEY (patient_id, condition_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (condition_id) REFERENCES medical_conditions(id) ON DELETE CASCADE,
    CONSTRAINT chk_condition_status CHECK (status IN ('active', 'resolved', 'chronic', 'unknown'))
);

GO
-- Patient Emergency Contacts Table
CREATE TABLE patient_emergency_contacts
(
    patient_id UNIQUEIDENTIFIER NOT NULL,
    contact_name VARCHAR(100) NOT NULL,
    contact_phone VARCHAR(20) NOT NULL,
    relationship VARCHAR(50),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    PRIMARY KEY (patient_id, contact_name, contact_phone),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE SET NULL
);

GO

-- Address Table
CREATE TABLE addresses
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    street VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) ,
    zip_code VARCHAR(10) NOT NULL,
    country VARCHAR(100) ,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
);

GO
-- Patient Addresses Junction Table
CREATE TABLE patient_addresses
(
    patient_id UNIQUEIDENTIFIER NOT NULL,
    address_id UNIQUEIDENTIFIER NOT NULL,
    address_type VARCHAR(50) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    PRIMARY KEY (patient_id, address_id, address_type),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES addresses(id) ON DELETE CASCADE,
    CONSTRAINT chk_address_type CHECK (address_type IN ('home', 'work', 'billing'))
);

GO

-- Doctors Table
CREATE TABLE doctors
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    user_id UNIQUEIDENTIFIER,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    imgUrl NVARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    bio NVARCHAR(MAX),
    is_available BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);
CREATE INDEX idx_doctors_user_id ON doctors(user_id);
CREATE INDEX idx_doctors_specialization ON doctors(specialization);
CREATE INDEX idx_doctors_license ON doctors(license_number);
GO

-- Medical Specializations Table
CREATE TABLE medical_specializations
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    name VARCHAR(100) NOT NULL UNIQUE
)
GO
-- Medical Sub-Specializations Table
CREATE TABLE medical_sub_specializations
(
    medical_specialization_id UNIQUEIDENTIFIER NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    FOREIGN KEY (medical_specialization_id) REFERENCES medical_specializations(id) ON DELETE CASCADE,
    PRIMARY KEY (medical_specialization_id, name)
)
GO
-- Doctor Specializations Junction Table
CREATE TABLE doctor_specializations
(
    doctor_id UNIQUEIDENTIFIER NOT NULL,
    medical_specialization_id UNIQUEIDENTIFIER NULL,
    medical_sub_specialization_id UNIQUEIDENTIFIER NULL,
    PRIMARY KEY (doctor_id, medical_specialization_id, medical_sub_specialization_id),
    year_of_specialization INT,
    place_of_specialization VARCHAR(255),
    notes NVARCHAR(MAX),
    license_number VARCHAR(50) UNIQUE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE,
    FOREIGN KEY (medical_specialization_id) REFERENCES medical_specializations(id) ON DELETE CASCADE,
    CONSTRAINT chk_spec_required CHECK (medical_specialization_id IS NOT NULL OR medical_sub_specialization_id IS NOT NULL)
)
GO

-- Doctor Experiences Table
CREATE TABLE doctor_experiences
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    doctor_id UNIQUEIDENTIFIER NOT NULL,
    location_name VARCHAR(255) NOT NULL,
    position VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    responsibilities NVARCHAR(MAX),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);

-- Appointments Table
CREATE TABLE appointments
(
    id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    patient_id UNIQUEIDENTIFIER NOT NULL,
    doctor_id UNIQUEIDENTIFIER NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    duration_minutes INT DEFAULT 30,
    status VARCHAR(20) DEFAULT 'scheduled',
    appointment_type VARCHAR(50),
    reason_for_visit NVARCHAR(MAX),
    notes NVARCHAR(MAX),
    created_by UNIQUEIDENTIFIER,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES users(user_id),
    CONSTRAINT chk_appointment_status CHECK (status IN ('scheduled', 'confirmed', 'completed', 'cancelled', 'no_show')),
    CONSTRAINT chk_appointment_type CHECK (appointment_type IN ('consultation', 'follow_up', 'emergency', 'routine'))
);
CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX idx_appointments_date_time ON appointments(appointment_date, appointment_time);
CREATE INDEX idx_appointments_status ON appointments(status);
GO