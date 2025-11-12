import { Injectable,OnInit } from '@angular/core';
import { Item as CartItem } from './models/Item';
import { JsonpInterceptor } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cartItems: CartItem[] = [];
  private storageKey = 'shoppingCart';
  
  constructor() {
    // Initialize sessionStorage with demo data if empty
    if (!sessionStorage.getItem(this.storageKey)) 
    {
        console.log('calling service constructor');
        const demoCart: CartItem[] = [
        new CartItem(1, 'Rose', 15, 2, '/assets/images/rose.jpg'),
        new CartItem(2, 'Lotus', 30, 4, '/assets/images/lotus.jpg')
      ];
      sessionStorage.setItem(this.storageKey, JSON.stringify(demoCart));
    }

    // Load items into memory
      const stored = sessionStorage.getItem(this.storageKey);
      this.cartItems = stored ? JSON.parse(stored) : [];
   }
   ngOnInit(): void {
     
   }
  //Add Product to Cart
  addToCart(item: CartItem): void {
   
    this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    this.cartItems.push(item);
    this.saveCart(this.cartItems);
  }

  //Get All Cart Items
  getCartItems(): CartItem[] {
    
    this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    console.log(this.cartItems);
    return this.cartItems;
  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
     // Load existing cart items from session storage
      this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
      console.log(this.cartItems);
      // Find the product in the cart
      const itemIndex = this.cartItems.findIndex((item: any) => item.productId === productId);
      if (itemIndex !== -1)
      {
      // If found, update its quantity
           
          this.cartItems[itemIndex].quantity = quantity;

          // If quantity becomes 0 or less, remove it from the cart
          // if (quantity <= 0) {
          //   this.cartItems.splice(itemIndex, 1);
          // }
       }

       // Save updated cart back to sessionStorage
        this.saveCart(this.cartItems);
      }


// Remove Product from Cart
   removeFromCart(productId: number): void 
   {
  // Load current cart from sessionStorage
     const stored = sessionStorage.getItem(this.storageKey);
     const cartItems = stored ? JSON.parse(stored) : [];

    // Filter out the product to remove it
    const updatedCart = cartItems.filter((item: any) => item.productId !== productId);

    // Save the updated cart back to sessionStorage
    sessionStorage.setItem(this.storageKey, JSON.stringify(updatedCart));

    // (Optional) also update in-memory cart if you maintain one
     this.cartItems = updatedCart;
  }


  //Clear Entire Cart
  clearCart(): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify([]));
    //sessionStorage.removeItem(this.storageKey);
  }

  //Calculate Total Items
  getTotalItems(): number {
     this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    return this.cartItems.length;
  }

  //Calculate Total Amount
  getTotalPrice(): number {
  // Load the current cart items from sessionStorage
  const stored = sessionStorage.getItem(this.storageKey);
  const cartItems = stored ? JSON.parse(stored) : [];

  // Calculate the total
  const total = cartItems.reduce((sum: number, item: any) => {
    // Ensure item has both 'price' and 'quantity' properties
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return sum + itemTotal;
     }, 0);

     return total;
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    //save data to sessionStorage
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));

  }
}
