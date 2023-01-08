import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[] = MOVIES;

  searchText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  search():void {
    console.log("Hi");
    console.log(this.searchText);
    
    this.movies = this.movies.filter((movie:Movie)=> movie.movieTitle === this.searchText)
  }

  reset():void {
    this.movies = MOVIES;
  }

}
