import { EditModalComponent } from '../../components/edit-modal/edit-modal';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  movies: Array<{title: string, director: string, actors: Array<string>}>;

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider, private modalCtrl: ModalController) {
    this.movies = [];
    this.getData();
  }

  itemTapped(event, movie) {
    this.navCtrl.push(DetailsPage, {
      movie: movie
    });
  }
  
  newMovie() {
    let newModal = this.modalCtrl.create(EditModalComponent);
    newModal.onDidDismiss(data => {
      this.getData();
    });
    newModal.present();
  }
  
  editMovie(movie) {
    let editModal = this.modalCtrl.create(EditModalComponent, { movie: movie });
    editModal.onDidDismiss(data => {
      this.getData();
    });
    editModal.present();
  }
  
  deleteMovie(movie) {
    this.movieProvider.deleteMovie(movie);
    this.getData();
  }
  
  getData() {
    this.movieProvider.getMovies().subscribe(movies => this.movies = movies);
  }
}
