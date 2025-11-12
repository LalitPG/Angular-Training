import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { CounterComponent } from '../counter/counter.component';
import { Item as CartItem }from '../../../shopping-cart/models/Item'
import { ProductHighlightDirective } from '../../../shared/product-highlight.directive';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule,CounterComponent,ProductHighlightDirective],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  currentProductId:any;
  @Input () product!: Product;
  private storageKey = 'shoppingCart';
  cartItems: CartItem[] = [];
  cartItem! : CartItem;

  constructor(private router:Router,private route: ActivatedRoute, 
              private productService: ProductService) {  }
  
  ngOnInit() { 
    this.currentProductId=this.route.snapshot.paramMap.get("id");
    this.product=this.productService.getProductById(this.currentProductId);
  };
 
  onUpdate(data:any){
     if(this.product != undefined)
      this.product.likes=data.count;
      this.productService.updateProduct(this.product);
   }
   
  addToCart():void {
    
    let id=this.currentProductId;
    console.log("Adding to cart product with id:", id);
    this.product = this.productService.getProductById(this.currentProductId);
    this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    this.cartItem = new CartItem(this?.product!.id,this.product!.title,this.product!.price,1,this.product!.imageurl);
    this.cartItems.push(this.cartItem);
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.router.navigate(['./addtocart']);
  }

  goToUpdate(): void {
   let  id=this.currentProductId;
   console.log("Updating product with id:", id);
   this.router.navigate(['./update/', id]);
  }

  goToDelete(id:number): void {
    console.log("Deleting product with id:", id);
    this.router.navigate(['./delete/', id]);
  }
   // ngIf
  isLoggedIn = true;
  userName = 'Ravi';

  // ngFor
  products = [
    { name: 'Rose', price: 12 },
    { name: 'Lotus', price: 25 },
    { name: 'Gerbera', price: 8 },
  ];

  // ngSwitch
  status = 'outofstock';

  // ngModel
  promoCode = '';

  // Dynamic styling
  //product = { name: 'Rose', price:9};

}