import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {
  currentProductId:any;
  constructor(private productsvc:ProductService,
              private router:Router,
              private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.deleteProduct();
  }
  deleteProduct()
  {
    this.currentProductId=this.route.snapshot.paramMap.get("id");
    this.productsvc.deleteProduct(this.currentProductId).subscribe(()=>{
        alert('deleted successfully');
        this.router.navigate(['lists']);
    });
  }
}
