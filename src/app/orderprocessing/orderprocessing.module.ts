import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent,MonthSelectorComponent,OrderSummaryComponent,AnalyticsComponent,CustomerComponent,OrderComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DashboardComponent,MonthSelectorComponent,OrderSummaryComponent,AnalyticsComponent,CustomerComponent,OrderComponent]
})
export class OrderprocessingModule { }
