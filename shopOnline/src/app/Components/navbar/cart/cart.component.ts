import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../../../Services/articoli.service';
import { iproducts } from '../../../interfaces/i-product';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  isDropdownOpen = false;
  faShoppingCart = faShoppingCart;
  faTrash = faTrash;
  constructor(private articoliSvc: ArticoliService) {}

  cart: iproducts[] = [];

  ngOnInit(): void {
    this.articoliSvc.cart$.subscribe((product) => {
      this.cart.push(product);
    });
  }
  removeFromCart(product: any) {
    this.cart = this.cart.filter((p) => p !== product);
  }

  calculateTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
