import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchedMovie: any = [];
  isResponseNull: boolean = true;
  constructor(public mainService: MainService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchedMovie = this.route.snapshot.paramMap.get('moviename');
    console.log(this.searchedMovie);

    this.mainService
      .searchMovies(this.searchedMovie.split(' ').join('&'))
      .subscribe((res) => {
        this.searchedMovie = res.results;
        console.log(this.searchedMovie.length);
        if (this.searchedMovie.length == 0) {
          this.isResponseNull = true;
        } else {
          this.isResponseNull = false;
        }
      });

    console.log(this.isResponseNull);
  }
}
