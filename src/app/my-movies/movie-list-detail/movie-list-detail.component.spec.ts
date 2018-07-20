import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListDetailComponent } from './movie-list-detail.component';

describe('MovieListDetailComponent', () => {
  let component: MovieListDetailComponent;
  let fixture: ComponentFixture<MovieListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
