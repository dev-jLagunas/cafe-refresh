import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuProducts } from '../../models/menu-product.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnInit {
  menuProduct: MenuProducts | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const menuId = Number(this.route.snapshot.params['id']);
    this.menuProduct = this.menuService.getMenuItemById(menuId);
  }

  goBackToMenuPage() {
    this.router.navigate(['menu']);
  }
}
