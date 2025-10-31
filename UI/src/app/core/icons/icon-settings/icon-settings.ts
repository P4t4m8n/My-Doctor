import { Component } from '@angular/core';
import { IconCalendar } from '../icon-calendar/icon-calendar';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-icon-settings',
  imports: [NgStyle],
  templateUrl: './icon-settings.html',
  styleUrl: './icon-settings.css',
})
export class IconSettings extends IconCalendar {}
