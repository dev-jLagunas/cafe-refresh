import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-landing.component.html',
  styleUrl: './hero-landing.component.scss',
})
export class HeroLandingComponent {}
