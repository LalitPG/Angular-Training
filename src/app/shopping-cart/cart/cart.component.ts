import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems: CartItem[] = [];
  totalPrice = 0;
  storageKey = 'sessionKey';

  constructor(private crm:CartService) {}
  
  addCart(cartItem: CartItem)
  {
    this.crm.addToCart(cartItem);
  }
  loadCart() {
    this.cartItems = this.crm.getCartItems();
    this.totalPrice = this.crm.getTotalItems();
  }

  removeItem(id: number) { 
    this.crm.removeFromCart(id);
    this.loadCart();
  }

  clearCart() { 
    this.crm.clearCart();
    this.loadCart();
  }
  getTotalItems():number
  {
     const cart = this.crm.getCartItems();
     return cart.length
  }
  getTotalPrice()
  {
    return this.crm.getTotalItems();
  }
  saveCart(cart:CartItem[]):void
  {
    sessionStorage.setItem(this.storageKey,JSON.stringify(cart));
  }
}