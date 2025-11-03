import { Component, OnInit } from '@angular/core';
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
export class CartComponent  implements OnInit  {
 cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(private crm:CartService) {}
  
  ngOnInit(): void {
    console.log('calling init of cart component');
    this.loadCart(); // Load cart items and total price
  }
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
  getTotalItems()
  {
     return this.crm.getTotalItems();
  }
  getTotalPrice()
  {
    return this.crm.getTotalPrice();
  }
  updateQuantity(productId: number, quantity: number)
  {
    this.crm.updateQuantity(productId,quantity);
  }
}