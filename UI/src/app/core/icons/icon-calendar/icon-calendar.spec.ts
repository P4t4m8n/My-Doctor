import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCalendar } from './icon-calendar';

describe('IconCalendar', () => {
  let component: IconCalendar;
  let fixture: ComponentFixture<IconCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
