import { Component, OnInit } from '@angular/core';
import { MovieListService } from './movie-list.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component';

import { MovieDetailData } from './movie-detail.interface';

@Component({
  selector: 'app-movie-list-dashboard',
  templateUrl: './movie-list-dashboard.component.html',
  styleUrls: ['./movie-list-dashboard.component.scss']
})
export class MovieListDashboardComponent implements OnInit {
  moviesList: any;
  filteredMovieDetail: any;
  movieData = {} as MovieDetailData;
  constructor(private movieListService: MovieListService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.movieListService.getMoviesList().subscribe((data: any) => {
      this.moviesList = data;
    });
  }

  getMovieDetail(movieId) {
    this.filteredMovieDetail = Object.assign(
      {},
      ...this.moviesList.filter(movie => {
        return movie.id == movieId;
      })
    );

    this.movieData.title = this.filteredMovieDetail.title;
    this.movieData.description = this.filteredMovieDetail.description;
    this.movieData.director = this.filteredMovieDetail.director;
    this.movieData.producer = this.filteredMovieDetail.producer;
    this.movieData.releaseDate = this.filteredMovieDetail.release_date;
    this.movieData.rating = this.filteredMovieDetail.rt_score;

    this.openDialog(this.movieData);
  }

  openDialog(movieData: MovieDetailData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = movieData;
    this.dialog.open(MovieDetailDialogComponent, dialogConfig);
  }

}
