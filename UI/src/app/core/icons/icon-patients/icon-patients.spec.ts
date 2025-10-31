import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPatients } from './icon-patients';

describe('IconPatients', () => {
  let component: IconPatients;
  let fixture: ComponentFixture<IconPatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPatients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPatients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
