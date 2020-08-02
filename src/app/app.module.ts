import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { MovieListDashboardComponent } from './movie-list-dashboard/movie-list-dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

import { MovieListService } from './movie-list-dashboard/movie-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailDialogComponent } from './movie-detail-dialog/movie-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListDashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    MovieDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailDialogComponent]
})
export class AppModule { }
