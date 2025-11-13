import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../membership/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
     constructor(private authSer:AuthService,private router:Router)
     {

     }
     LogOut()
     {
       console.log('logout');
       this.authSer.logout();
       this.router.navigate(['/login']);
     }
}
