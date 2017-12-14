export class Movie {
  id: number;
  title: string;
  director: string;
  actors: Array<string>;

  constructor() {
    this.id = 0;
    this.title = '';
    this.director = '';
    this.actors = new Array<string>();
  }
}