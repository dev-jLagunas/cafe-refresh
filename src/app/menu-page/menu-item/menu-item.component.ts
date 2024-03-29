import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuProducts } from '../../models/menu-product.model';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  menuService = inject(MenuService);
  menuProduct: MenuProducts | undefined;

  constructor(private router: Router) {
    const menuId = Number(this.route.snapshot.params['id']);
    this.menuProduct = this.menuService.getMenuItemById(menuId);
  }

  goBack() {
    this.router.navigate(['menu']);
  }
}
