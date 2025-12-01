import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { User } from '../models/customer';
import { HttpClientModule } from '@angular/common/http';
import { Loggedinguard } from '../../loggedinguard.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isValidUser:boolean=false;
  user:User = new User('lalit','lalit123','admin');
  error = '';
   constructor(private svc:AuthService,
    private router: Router) {    }  //DI

    onSubmit(form:any):void
    { 

      //  this.svc.validate(this.user).subscribe({
      //     next: () => this.router.navigate(['/home']),
      //     error: () => this.error = 'Invalid credentials'
      //  });

       this.svc.validate(this.user).subscribe((data)=>{
        console.log(data);
        const {message} = data;
        this.isValidUser = (message === "Login Successful");

         if(this.isValidUser)
       { 
         console.log("Valid User !"); 
         localStorage.setItem('username',this.user.username);
         this.router.navigate(['/home']);
       }
       else{ console.log("Invalid User !"); } 
       
       });
  
        
    }
}