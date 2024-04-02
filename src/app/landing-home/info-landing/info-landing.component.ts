import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info-landing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './info-landing.component.html',
  styleUrl: './info-landing.component.scss',
})
export class InfoLandingComponent {}
