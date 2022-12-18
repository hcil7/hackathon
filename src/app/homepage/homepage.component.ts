import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { MatTabNav } from '@angular/material/tabs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  selectedIndex: number = 0;
  isHidden: boolean = true;
  nowPlaying: any = [];
  upcoming: any = [];
  topRated: any = [];
  popular: any = [];
  searchMovieInput: string = '';
  constructor(public mainService: MainService, private router: Router) {}

  ngOnInit(): void {
    this.mainService.getMovies('movie/now_playing').subscribe((res) => {
      this.nowPlaying = res.results;
      console.log(this.nowPlaying);
    });

    this.mainService.getMovies('movie/popular').subscribe((res) => {
      this.popular = res.results;
    });
    this.mainService.getMovies('movie/top_rated').subscribe((res) => {
      this.topRated = res.results;
    });
    this.mainService.getMovies('movie/upcoming').subscribe((res) => {
      this.upcoming = res.results;
    });
  }
  sendMovieName() {
    // console.log(event.target);
    if (this.searchMovieInput.trim()) {
      this.router.navigate(['/search/' + this.searchMovieInput]);
    }
  }
}
