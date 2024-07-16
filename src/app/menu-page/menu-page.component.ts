import { Component, OnInit } from '@angular/core';
import { MenuProducts } from '../models/menu-product.model';
import { MenuService } from '../services/menu.service';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [RouterLink, FooterComponent, TranslateModule],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent implements OnInit {
  menuItems: MenuProducts[] = [];
  filteredItems: MenuProducts[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getAllMenuItems();
    this.filteredItems = [...this.menuItems];
  }

  filterItems(category: string): void {
    if (category === 'all') {
      this.filteredItems = [...this.menuItems];
    } else {
      this.filteredItems = this.menuItems.filter(
        (item) => item.category === category
      );
    }
  }
}
