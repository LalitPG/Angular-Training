import { Routes } from '@angular/router';
import { ListComponent } from './catalog/products/list/list.component';
import { DetailsComponent } from './catalog/products/details/details.component';
import { UpdateComponent } from './catalog/products/update/update.component';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './membership/register/register.component';
import { DeleteComponent } from './catalog/products/delete/delete.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'lists', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'login', component:  SignInComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'addtocart', component:  CartComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'cart', component:  CartComponent}
];