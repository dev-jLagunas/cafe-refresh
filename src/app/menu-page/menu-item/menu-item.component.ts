import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuProducts } from '../../models/menu-product.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnInit {
  menuProduct: MenuProducts | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const itemId = Number(this.route.snapshot.params['id']);
    this.menuProduct = this.menuService.getMenuItemById(itemId);
  }
}
