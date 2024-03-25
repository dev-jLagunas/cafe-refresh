import { Component } from '@angular/core';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';
import { AboutLandingComponent } from './about-landing/about-landing.component';
import { MenuLandingComponent } from './menu-landing/menu-landing.component';

@Component({
  selector: 'app-landing-home',
  standalone: true,
  imports: [HeroLandingComponent, AboutLandingComponent, MenuLandingComponent],
  templateUrl: './landing-home.component.html',
  styleUrl: './landing-home.component.scss',
})
export class LandingHomeComponent {}
