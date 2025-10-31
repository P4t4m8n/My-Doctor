import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../abstracts/icon-component';

@Component({
  selector: 'app-icon-schedule',
  imports: [NgStyle],
  templateUrl: './icon-schedule.html',
  styleUrl: './icon-schedule.css',
})
export class IconSchedule extends IconComponent {}
