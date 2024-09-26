import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-landing',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './menu-landing.component.html',
  styleUrl: './menu-landing.component.scss',
})
export class MenuLandingComponent {}
