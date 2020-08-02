import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListDashboardComponent } from './movie-list-dashboard/movie-list-dashboard.component';
import { DashboardHeaderComponent } from './header/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './footer/dashboard-footer/dashboard-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListDashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
