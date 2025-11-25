import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
 customers :any[]=[{ "id": 1, "name":"Raj" },
  { "id": 2, "name": "Neha", },
  { "id": 3, "name": "Arjun"}]

  selectedCustomerId!: number;

constructor(private dashboardService: DashboardService){}
// onNameChange(event: any) {
//     console.log('customerid');
//     console.log(event.target.value);
//     this.dashboardService.setCustomer(event.target.value);
//   }
onNameChange(event: Event) {
  const selectedId = Number((event.target as HTMLSelectElement).value);
  console.log('customerid:', selectedId);

  this.dashboardService.setCustomer(selectedId);
}


}
