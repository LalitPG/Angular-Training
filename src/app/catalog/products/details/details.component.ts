import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { CounterComponent } from '../counter/counter.component';
import { Item as CartItem }from '../../../shopping-cart/models/Item'
import { ProductHighlightDirective } from '../../../custom/custom/product-highlight.directive';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule,CounterComponent,ProductHighlightDirective],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [ProductService]
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
    console.log('details init');
    this.currentProductId=this.route.snapshot.paramMap.get("id");

    this.productService.getProductById(this.currentProductId).subscribe((data)=>{
      console.log(data);
      this.product = data;
    });
  };
 
  onUpdate(data:any){
     if(this.product != undefined)
      this.product.likes=data.count;
      this.productService.updateProduct(this.product);
   }
   
  addToCart():void {
    
    let id=this.currentProductId;
    console.log("Adding to cart product with id:", id);
    this.productService.getProductById(this.currentProductId).subscribe((data)=>{
      this.product = data;
    });
    console.log(this.product);
     this.cartItems = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
     this.cartItem = new CartItem(this?.product!.id,this.product!.title,this.product!.price,1,this.product!.imageurl);
     this.cartItems.push(this.cartItem);
     sessionStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
     this.router.navigate(['./addtocart']);
  }

  goToUpdate(id:number): void {
   console.log("Updating product with id:", id);
   this.router.navigate(['./update/', id]);
  }

  goToDelete(id:number): void {
    console.log("Deleting product with id:", id);
    this.router.navigate(['./delete/', id]);
  }
   // ngIf
  isLoggedIn = true;
  userName = 'Lalit';

  // ngFor

  // ngSwitch
  status = 'outofstock';

  // ngModel
  promoCode = '';

  // Dynamic styling
  //product = { name: 'Rose', price:9};

}