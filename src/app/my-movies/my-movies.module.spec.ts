import { MyMoviesModule } from './my-movies.module';

describe('MyMoviesModule', () => {
  let myMoviesModule: MyMoviesModule;

  beforeEach(() => {
    myMoviesModule = new MyMoviesModule();
  });

  it('should create an instance', () => {
    expect(myMoviesModule).toBeTruthy();
  });
});
