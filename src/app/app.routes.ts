import { Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuItemComponent } from './menu-page/menu-item/menu-item.component';

export const routes: Routes = [
  { path: '', component: LandingHomeComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'details/:id', component: MenuItemComponent },
];
