import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-home/landing-home.component').then(
        (m) => m.LandingHomeComponent
      ),
    title: 'Cafe Triangle - Home',
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery-page/gallery-page.component').then(
        (m) => m.GalleryPageComponent
      ),
    title: 'Cafe Triangle - Gallery',
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menu-page/menu-page.component').then(
        (m) => m.MenuPageComponent
      ),
    title: 'Cafe Triangle - Full Menu',
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./menu-page/menu-item/menu-item.component').then(
        (m) => m.MenuItemComponent
      ),
    title: 'Menu Item',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found',
  },
];
