import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../entities/movie';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  movie: Movie;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.get('movie');
  }

}
