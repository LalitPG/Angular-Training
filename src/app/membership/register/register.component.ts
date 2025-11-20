import { Component } from '@angular/core';
import { User } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   
  submitted = false;

    roles =[
             {value:'admin',display:'Admin'},
             {value:'user',display:'User'}
     ];


 user:User = new User('','','admin');
   constructor(private svc:AuthService) {  }
 
 
  onSubmit(form: any): void {
    
    this.svc.register(this.user).subscribe((data)=>{
      console.log(data);
    })

  }
 
  showCustomer(form:any){
         return form && form.controls['firstName'] && form.controls['firstName'].value;
  }
 
  showFormControls(form:any){
     return form && form.controls['firstName'] && form.controls['firstName'].value;
  }


}