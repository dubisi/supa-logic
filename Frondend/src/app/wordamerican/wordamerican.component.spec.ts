import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordamericanComponent } from './wordamerican.component';

describe('WordamericanComponent', () => {
  let component: WordamericanComponent;
  let fixture: ComponentFixture<WordamericanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordamericanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordamericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
