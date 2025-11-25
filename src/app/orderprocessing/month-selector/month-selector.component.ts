import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.css'
})
export class MonthSelectorComponent {
  
 months = ['January', 'February', 'March', 'April', 'May'];

  constructor(private dashboardService: DashboardService) {}

  onMonthChange(event: any) {
    //this.dashboardService.setMonth(event.target.value);
  }
}
