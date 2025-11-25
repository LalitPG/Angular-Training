import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';
import { MembershipModule } from './membership/membership.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { GraphicsModule } from './graphics/graphics.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './membership/auth.service';
import { Loggedinguard } from './loggedinguard.service';
import { OrderprocessingModule } from './orderprocessing/orderprocessing.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,GraphicsModule, RouterOutlet, CatalogModule, ShoppingCartModule, MembershipModule,OrderprocessingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AuthService,Loggedinguard]
})
export class AppComponent {
  title = 'Transflower Store';
}
