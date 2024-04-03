import { Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuItemComponent } from './menu-page/menu-item/menu-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingHomeComponent, title: 'Cafe Triangle - Home' },
  {
    path: 'gallery',
    component: GalleryPageComponent,
    title: 'Cafe Triangle - Gallery',
  },
  {
    path: 'menu',
    component: MenuPageComponent,
    title: 'Cafe Triangle - Full Menu',
  },
  { path: 'details/:id', component: MenuItemComponent, title: 'Menu Item' },
  { path: '**', component: NotFoundComponent, title: '404 Not Found' },
];
