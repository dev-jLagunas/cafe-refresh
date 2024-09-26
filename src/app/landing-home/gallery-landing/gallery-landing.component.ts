import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery-landing',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './gallery-landing.component.html',
  styleUrl: './gallery-landing.component.scss',
})
export class GalleryLandingComponent {}
