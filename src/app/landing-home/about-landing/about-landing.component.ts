import { Component } from '@angular/core';
import { ABOUT_DATA } from './ABOUT_DATA';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about-landing',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './about-landing.component.html',
  styleUrl: './about-landing.component.scss',
})
export class AboutLandingComponent {
  articles = ABOUT_DATA;
}
