import { Injectable } from '@angular/core';
import { MenuProducts } from '../models/menu-product.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menuItems: MenuProducts[] = [
    {
      id: 1,
      title: 'menu-page.CHICKEN_BURRITO',
      category: 'Lunch',
      price: 1200,
      img: 'assets/menu-food/chickenburrito.jpg',
      description: 'menu-page.CHICKEN_BURRITO_DESC',
    },
    {
      id: 2,
      title: 'menu-page.FLAN',
      category: 'Dessert',
      price: 550,
      img: 'assets/menu-food/flantop.jpg',
      description: 'menu-page.FLAN_DESC',
    },
    {
      id: 3,
      title: 'menu-page.MATCHA_CRUMBLE',
      category: 'Dessert',
      price: 450,
      img: 'assets/menu-food/browniematcha.jpg',
      description: 'menu-page.MATCHA_CRUMBLE_DESC',
    },
    {
      id: 4,
      title: 'menu-page.VEGAN_CHOCO_CHIP',
      category: 'Dessert',
      price: 300,
      img: 'assets/menu-food/veganchoco.jpg',
      description: 'menu-page.VEGAN_CHOCO_CHIP_DESC',
    },
    {
      id: 5,
      title: 'menu-page.CARNITAS_BURRITO',
      category: 'Lunch',
      price: 1200,
      img: 'assets/menu-food/carnitas.jpg',
      description: 'menu-page.CARNITAS_BURRITO_DESC',
    },
    {
      id: 6,
      title: 'menu-page.QUESADILLA',
      category: 'Lunch',
      price: 800,
      img: 'assets/menu-food/quesadilla.jpg',
      description: 'menu-page.QUESADILLA_DESC',
    },
    {
      id: 7,
      title: 'menu-page.TRES_LECHES_CAKE',
      category: 'Dessert',
      price: 600,
      img: 'assets/menu-food/regtres.jpg',
      description: 'menu-page.TRES_LECHES_CAKE_DESC',
    },
    {
      id: 8,
      title: 'menu-page.BANANA_BREAD',
      category: 'Dessert',
      price: 550,
      img: 'assets/menu-food/bananabread.jpg',
      description: 'menu-page.BANANA_BREAD_DESC',
    },
    {
      id: 9,
      title: 'menu-page.STRAWBERRY_CHEESECAKE',
      category: 'Dessert',
      price: 700,
      img: 'assets/menu-food/strawberrycheese.jpg',
      description: 'menu-page.STRAWBERRY_CHEESECAKE_DESC',
    },
    {
      id: 10,
      title: 'menu-page.JAMAICA_SODA',
      category: 'Drinks',
      price: 550,
      img: 'assets/menu-drinks/Hibiscus.jpg',
      description: 'menu-page.JAMAICA_SODA_DESC',
    },
    {
      id: 11,
      title: 'menu-page.HOT_CHOCO',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/hot-choco.jpg',
      description: 'menu-page.HOT_CHOCO_DESC',
    },
    {
      id: 12,
      title: 'menu-page.CAFE_LATTE',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/cafe-latte.jpg',
      description: 'menu-page.CAFE_LATTE_DESC',
    },
    {
      id: 13,
      title: 'menu-page.MATCHA_LATTE',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/matcha-latte.jpg',
      description: 'menu-page.MATCHA_LATTE_DESC',
    },
    {
      id: 14,
      title: 'menu-page.EARL_GREY',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/earl-tea.jpg',
      description: 'menu-page.EARL_GREY_DESC',
    },
    {
      id: 15,
      title: 'menu-page.AMERICANO',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/americano.jpg',
      description: 'menu-page.AMERICANO_DESC',
    },
    {
      id: 16,
      title: 'menu-page.ESPRESSO',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/espresso.jpg',
      description: 'menu-page.ESPRESSO_DESC',
    },
    {
      id: 17,
      title: 'menu-page.BOSTON_CREAM',
      category: 'Dessert',
      price: 400,
      img: 'assets/menu-landing/bostoncup.jpg',
      description: 'menu-page.BOSTON_CREAM_DESC',
    },
    {
      id: 18,
      title: 'menu-page.CHOCO_ROLLS',
      category: 'Dessert',
      price: 600,
      img: 'assets/menu-landing/chocorolls.jpg',
      description: 'menu-page.CHOCO_ROLLS_DESC',
    },
    {
      id: 19,
      title: 'menu-page.BLUEBERRY',
      category: 'Dessert',
      price: 700,
      img: 'assets/menu-landing/bluecheesecake.jpg',
      description: 'menu-page.BLUEBERRY_DESC',
    },
    {
      id: 20,
      title: 'menu-page.DOUBLE_CHOCO',
      category: 'Dessert',
      price: 300,
      img: 'assets/menu-landing/doublechoco.jpg',
      description: 'menu-page.DOUBLE_CHOCO_DESC',
    },
  ];

  getAllMenuItems(): MenuProducts[] {
    return this.menuItems;
  }

  getMenuItemById(id: number): MenuProducts | undefined {
    return this.menuItems.find((menuItem) => menuItem.id === id);
  }
}
