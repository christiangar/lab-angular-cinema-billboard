import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieListComponentComponent } from './my-movie-list-component.component';

describe('MyMovieListComponentComponent', () => {
  let component: MyMovieListComponentComponent;
  let fixture: ComponentFixture<MyMovieListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
