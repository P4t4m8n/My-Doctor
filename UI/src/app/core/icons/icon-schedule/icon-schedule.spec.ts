import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSchedule } from './icon-schedule';

describe('IconSchedule', () => {
  let component: IconSchedule;
  let fixture: ComponentFixture<IconSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
