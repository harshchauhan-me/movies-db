import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MovieDetailData } from './../movie-list-dashboard/movie-detail.interface';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit {

  movie = {} as MovieDetailData;

  constructor(private dialogRef: MatDialogRef<MovieDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieDetailData) {
    this.movie.title = data.title;
    this.movie.description = data.description;
    this.movie.director = data.director;
    this.movie.producer = data.producer;
    this.movie.releaseDate = data.releaseDate;
    this.movie.rating = data.rating;
    this.movie.image = data.image;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
