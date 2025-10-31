import { Component } from '@angular/core';
import { IconComponent } from '../../abstracts/icon-component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-icon-calendar',
  imports: [NgStyle],
  templateUrl: './icon-calendar.html',
  styleUrl: './icon-calendar.css',
})
export class IconCalendar extends IconComponent {}
