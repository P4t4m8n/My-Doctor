import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuFooter } from './side-menu-footer';

describe('SideMenuFooter', () => {
  let component: SideMenuFooter;
  let fixture: ComponentFixture<SideMenuFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
