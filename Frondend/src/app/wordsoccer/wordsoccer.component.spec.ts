import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsoccerComponent } from './wordsoccer.component';

describe('WordsoccerComponent', () => {
  let component: WordsoccerComponent;
  let fixture: ComponentFixture<WordsoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsoccerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
