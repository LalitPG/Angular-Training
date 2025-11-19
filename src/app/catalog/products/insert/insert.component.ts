import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  product = {
  id:0,
  title: '',
  description: '',
  price: 0,
  imageurl: '',
  likes: 0,
  discount: false,
  stock: 0
  };

  constructor(private productsvc:ProductService,
              private router: Router){}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Product:', form.value);
      this.product.id = 18;
      this.productsvc.InsertProdcut(this.product).subscribe(()=>{
        console.log('data saved successfuly');
        alert('saved successfully');
        this.router.navigate(['/lists']);
      });
    }
    else
    {
      console.log('not valid');
    }
  }

}
