import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss',
})
export class GalleryPageComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      once: false,
    });
  }
}
