import { Component } from '@angular/core';
import { ABOUT_DATA } from './ABOUT_DATA';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about-landing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about-landing.component.html',
  styleUrl: './about-landing.component.scss',
})
export class AboutLandingComponent {
  articles = ABOUT_DATA;
}
