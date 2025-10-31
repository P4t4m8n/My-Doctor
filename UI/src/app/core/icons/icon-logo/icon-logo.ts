import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../abstracts/icon-component';

@Component({
  selector: 'app-icon-logo',
  imports: [NgStyle],
  templateUrl: './icon-logo.html',
  styleUrl: './icon-logo.css',
})
export class IconLogo extends IconComponent {}
{
}
