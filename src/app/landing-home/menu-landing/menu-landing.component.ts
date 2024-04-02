import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-landing',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './menu-landing.component.html',
  styleUrl: './menu-landing.component.scss',
})
export class MenuLandingComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
