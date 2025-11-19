import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  product:any={};
  currentProductId:any;
    constructor(private productsvc:ProductService,
                private router:Router,
                private route: ActivatedRoute){}
  
    ngOnInit(): void {
      this.currentProductId=this.route.snapshot.paramMap.get("id");
      this.productsvc.getProductById(this.currentProductId).subscribe((data)=>{
        this.product = data;
      })
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
          console.log('Product:',this.product);
          this.productsvc.updateProduct(this.product).subscribe(()=>{
            alert('product updated successfully');
            this.router.navigate(['/lists']);
          });
        }
        else
        {
          console.log('not valid');
        }
      }
}
