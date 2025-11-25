import { Routes } from '@angular/router';
import { ListComponent } from './catalog/products/list/list.component';
import { DetailsComponent } from './catalog/products/details/details.component';
import { UpdateComponent } from './catalog/products/update/update.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './membership/register/register.component';
import { DeleteComponent } from './catalog/products/delete/delete.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { Loggedinguard } from './loggedinguard.service';
import { GdiComponent } from './graphics/gdi/gdi.component';
import { InsertComponent } from './catalog/products/insert/insert.component';
import { DashboardComponent } from './orderprocessing/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'lists', loadComponent:()=>import('./catalog/products/list/list.component').then(m=>m.ListComponent)},
  { path: 'details/:id', loadComponent:()=>import('./catalog/products/details/details.component').then(m=>m.DetailsComponent) },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'login', component:  SignInComponent},
  { path: 'home', component:  HomeComponent,canActivate:[Loggedinguard]}, //,canActivate:[Loggedinguard]
  { path: 'addtocart', component:  CartComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'cart', component:  CartComponent},
  { path: 'gdi', component:  GdiComponent} ,
  { path: 'create', component:  InsertComponent},
  { path: 'dashboard', component:  DashboardComponent}
];