import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDashboard } from './icon-dashboard';

describe('IconDashboard', () => {
  let component: IconDashboard;
  let fixture: ComponentFixture<IconDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
