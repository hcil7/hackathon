import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movieIndex: any;
  responseMovie: any;
  responseReviews: any;
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.movieIndex = this.route.snapshot.paramMap.get('movieindex');
    this.mainService.getMovies('movie/' + this.movieIndex).subscribe((res) => {
      this.responseMovie = res;
      console.log(this.responseMovie);
    });
    this.mainService
      .getMovies('movie/' + this.movieIndex + '/reviews')
      .subscribe((res) => {
        this.responseReviews = res.results;
        console.log(this.responseReviews);
      });
  }
}
