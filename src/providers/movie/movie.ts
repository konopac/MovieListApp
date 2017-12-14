import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Movie } from '../../entities/movie';
import { Storage } from '@ionic/storage';

@Injectable()
export class MovieProvider {
    // TODO: get data from storage / REST
  nextId: number = 1;

  constructor(private storage: Storage) {
    this.storage.forEach( (value, key, index) => {
      let keyNumber: number = +key;
      if (keyNumber >= this.nextId) {
        this.nextId = keyNumber+1;
        console.log('CONSTRUCTOR highest nextId: ' + this.nextId);
      }
    });
    
  }
  
  getMovies(): Observable<Movie[]> {
    let result: Array<Movie> = new Array<Movie>();
    this.storage.forEach( (value, key, index) => {
      console.log('GET index: ' + index + ' - key: ' + key);
      result.push(value);
    });
    return of(result);
  }
  
  insertOrUpdateMovie(movie: Movie) {
    if (movie.id <= 0) {
      console.log(movie);
      movie.id = this.nextId;
      this.nextId++;
    }
    this.storage.set(movie.id+'', movie);
    console.log(movie);
    console.log('INSERT/UPDATE nextId: ' + this.nextId);
  }
  
  deleteMovie(movie: Movie) {
    this.storage.remove(movie.id+'');
    console.log('DELETE movie: ' + movie);
    console.log('DELETE nextId: ' + this.nextId);
  }

}
