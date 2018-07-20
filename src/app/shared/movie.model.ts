export class Movie {
  public id: number;
  public overview: string;
  public poster_path: string;
  public release_date: string;
  public title: string;
  public vote_average: number;
  public vote_count: number;

  constructor(
    id: number, overview: string, poster_path: string, release_date: string,
    title: string, vote_average: number, vote_count: number
  ) {
    this.id = id;
    this.overview = overview;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
