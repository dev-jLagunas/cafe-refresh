import { Component } from '@angular/core';
import { MenuProducts } from '../models/menu-product.model';
import { MenuService } from '../services/menu.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent {
  menuItems: MenuProducts[] = [];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getAllMenuItems();
    this.filteredItems = this.menuItems.slice(); // Initialize filteredItems here
  }

  filteredItems: MenuProducts[] = this.menuItems.slice();

  filterItems(category: string) {
    if (category === 'all') {
      this.filteredItems = this.menuItems.slice();
    } else {
      this.filteredItems = this.menuItems.filter(
        (item) => item.category === category
      );
    }
  }
}
