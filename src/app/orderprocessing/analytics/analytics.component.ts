import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
 selectedMonth:number=101;
 constructor(private dashboardService:DashboardService){}

 ngOnInit(): void {
  //  this.dashboardService.currentMonth$.subscribe(month=>{
  //   this.selectedMonth= month;
  //   this.updateChart(month);
  //  });
 }
 updateChart(month:number)
 {
  console.log("updating chart for month: ",month);
 }
}
