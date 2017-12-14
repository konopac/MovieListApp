import { Movie } from '../entities/movie';
export namespace Mock {
  export var nextId: number = 5;
  export const MOVIES: Movie[] = [
      {
        id: 1,
        title: 'Der Herr der Ringe',
        director: 'Peter Jackson',
        actors: ['Viggo Mortensen', 'Elijah Wood', 'Orlando Bloom']
      },
      {
        id: 2,
        title: 'Der Hobbit',
        director: 'Peter Jackson',
        actors: ['Martin Freeman', 'Richard Armitage']
      },
      {
        id: 3,
        title: 'Star Wars: Die letzten Jedi',
        director: 'Rian Johnson',
        actors: ['Daisy Ridley', 'Mark Hamill', 'Carrie Fisher', 'John Boyega']
      },
      {
        id: 4,
        title: 'Inception',
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Tom Hardy', 'Ellen Page']
      }
  ];
}