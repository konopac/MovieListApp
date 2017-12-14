import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Movie } from '../../entities/movie';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'edit-modal',
  templateUrl: 'edit-modal.html'
})
export class EditModalComponent {

  movie: Movie;
  newMode: boolean;
  header: string;

  constructor(public navParams: NavParams, private movieProvider: MovieProvider, private viewCtrl: ViewController) {
    this.movie = navParams.get('movie');
    this.newMode = this.movie == undefined;
    this.movie = this.newMode ? new Movie() : Object.assign({}, this.movie) ;
    this.header = this.newMode ? "Neuer Film" : "Bearbeiten";
  }

  save() {
    this.movieProvider.insertOrUpdateMovie(this.movie);
    this.viewCtrl.dismiss();
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  addActor() {
    this.movie.actors.push("");
  }
  
  removeActor(actor) {
    let index: number = this.movie.actors.indexOf(actor);
    this.movie.actors.splice(index, 1);
  }
}
