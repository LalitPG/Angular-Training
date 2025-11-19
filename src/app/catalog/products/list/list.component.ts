import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { CounterComponent } from '../counter/counter.component';
import { ProductHighlightDirective } from '../../../custom/custom/product-highlight.directive';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductHighlightDirective,HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [ProductService]
})
export class ListComponent {
products:any[]=[]
   

  constructor(private svc:ProductService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.svc.getAllProducts().subscribe(
      (data)=>{
        this.products = data;
      }
    );
  }


  goToProduct(id:number): void {
    console.log(id);
    this.router.navigate(['/details',id]);
  }
}