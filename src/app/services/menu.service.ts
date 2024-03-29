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
      title: 'Chicken Burrito',
      category: 'Lunch',
      price: 1200,
      img: 'assets/menu-food/chickenburrito.jpg',
      description:
        'Flavorful grilled chicken wrapped in tortilla with rice, pico de gallo, and melted cheese',
    },
    {
      id: 2,
      title: 'Flan (pudding)',
      category: 'Dessert',
      price: 550,
      img: 'assets/menu-food/flantop.jpg',
      description:
        'Rick Mexican style pudding with a dark caramel sauce and raspberry topping',
    },
    {
      id: 3,
      title: 'Match Crumble Cake',
      category: 'Dessert',
      price: 450,
      img: 'assets/menu-food/browniematcha.jpg',
      description: 'Matcha crumble cake topped with a raspberry homemade jam.',
    },
    {
      id: 4,
      title: 'Vegan Choco Chip Cookies',
      category: 'Dessert',
      price: 300,
      img: 'assets/menu-food/veganchoco.jpg',
      description:
        'Simple and delicious vegan chocolate chip cookies for your soul.',
    },
    {
      id: 5,
      title: 'Carnitas Burrito',
      category: 'Lunch',
      price: 1200,
      img: 'assets/menu-food/carnitas.jpg',
      description:
        'Three hours simmerd pork infused with various spices and juices. Very tender!',
    },
    {
      id: 6,
      title: 'Quesadilla',
      category: 'Lunch',
      price: 800,
      img: 'assets/menu-food/quesadilla.jpg',
      description:
        'Chicken or regular quesadilla available. Sides options also available.',
    },
    {
      id: 7,
      title: 'Tres Leches Cake',
      category: 'Dessert',
      price: 600,
      img: 'assets/menu-food/regtres.jpg',
      description:
        'Our most popular dessert. A traditional Mexican spongecake soaked in milks.',
    },
    {
      id: 8,
      title: 'Banana Bread',
      category: 'Dessert',
      price: 550,
      img: 'assets/menu-food/bananabread.jpg',
      description:
        'Simple vegan banana bread with earl grey. A la mode available.',
    },
    {
      id: 9,
      title: 'Strawberry Cheesecake',
      category: 'Dessert',
      price: 700,
      img: 'assets/menu-food/strawberrycheese.jpg',
      description:
        'Smooth and decadent cheesecake with strawberry sauce topping.',
    },
    {
      id: 10,
      title: 'Jamaica Soda',
      category: 'Drinks',
      price: 550,
      img: 'assets/menu-drinks/Hibiscus.jpg',
      description:
        'A refreshing drink made with hibiscus syrup mixed with soda water',
    },
    {
      id: 11,
      title: 'Mexican Hot Chocolate',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/hot-choco.jpg',
      description:
        'Authentic Mexican hot chocolate. Not too sweet with a hint of spices.',
    },
    {
      id: 12,
      title: 'Cafe Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/cafe-latte.jpg',
      description:
        'Made with custom bean blend. Short/Tall/Hot/Iced and Soy available.',
    },
    {
      id: 13,
      title: 'Matcha Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/matcha-latte.jpg',
      description:
        'Vibrant green tea latte. Short/Tall/Hot/Iced and Soy available.',
    },
    {
      id: 14,
      title: 'Earl Grey Tea',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/earl-tea.jpg',
      description:
        'A soft but vibrant flavor and smell. Short/Tall/Hot/Iced all available.',
    },
    {
      id: 15,
      title: 'Americano/Blend Coffee',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/americano.jpg',
      description:
        'Made with locally roasted beans. Dark roast with 3 countries beans.',
    },
    {
      id: 16,
      title: 'Espresso Shot',
      category: 'Drinks',
      price: 600,
      img: 'assets/menu-drinks/espresso.jpg',
      description:
        'Made with locally roasted beans. Dark roast with 3 countries beans.',
    },
    {
      id: 17,
      title: 'Boston Cream Cupcake',
      category: 'Dessert',
      price: 400,
      img: 'assets/menu-landing/bostoncup.jpg',
      description:
        'Homemade Bost Cream Cupcakes filled with delicious custard! Melt in your mouth good!',
    },
    {
      id: 18,
      title: 'Choco Cinnamon Rolls',
      category: 'Dessert',
      price: 600,
      img: 'assets/menu-landing/chocorolls.jpg',
      description: 'Soft and gooey chocolate rolls filled with organic chips!',
    },
    {
      id: 19,
      title: 'Blueberry Cheesecake',
      category: 'Dessert',
      price: 700,
      img: 'assets/menu-landing/bluecheesecake.jpg',
      description:
        'Silky smooth blueberry cheesecake filled and topped with fresh blueberries.',
    },
    {
      id: 20,
      title: 'Double Choco Chip Cookies',
      category: 'Dessert',
      price: 300,
      img: 'assets/menu-landing/doublechoco.jpg',
      description: 'Vegan double chocolate chip cookies made to be dipped!',
    },
  ];

  getAllMenuItems(): MenuProducts[] {
    return this.menuItems;
  }

  getMenuItemById(id: number): MenuProducts | undefined {
    return this.menuItems.find((menuItem) => menuItem.id === id);
  }
}
