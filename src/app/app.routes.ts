import { Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

export const routes: Routes = [
  { path: '', component: LandingHomeComponent },
  { path: 'gallery', component: GalleryPageComponent },
];
