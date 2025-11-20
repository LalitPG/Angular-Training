import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { Loggedinguard } from '../loggedinguard.service';

@NgModule({
  declarations: [SignInComponent,RegisterComponent],
  imports: [CommonModule, FormsModule,RouterLink,FormsModule],
  exports: [SignInComponent, RegisterComponent],
})
export class MembershipModule { }