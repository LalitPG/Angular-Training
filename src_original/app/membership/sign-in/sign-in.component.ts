import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
export class Credential  {
  constructor(public  email:string,public  password:string){  }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isValidUser:boolean=false;
  user: Credential=new Credential("lalit.patil@nihilent.com","joy123");
 
   constructor(private svc:AuthService,
    private router: Router) {    }  //DI

    onSubmit(form:any):void
    { 
       this.isValidUser=this.svc.validate(form.userEmail,form.userPassword);
      
       if(this.isValidUser)
       { 
         this.router.navigate(['/home']);
         console.log("Valid User !"); 
       }
       else{ console.log("Invalid User !"); }   
    }
}