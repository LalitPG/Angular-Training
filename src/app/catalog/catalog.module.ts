import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './products/details/details.component';
import { ListComponent } from './products/list/list.component';
import { CounterComponent } from './products/counter/counter.component';
import { InsertComponent } from './products/insert/insert.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ,ListComponent,DetailsComponent,CounterComponent,InsertComponent, HttpClientModule],

  exports: [ ListComponent, InsertComponent],

  providers:[ProductService]

})
export class CatalogModule { }
