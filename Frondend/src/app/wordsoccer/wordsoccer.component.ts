import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostWord, Word } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wordsoccer',
  templateUrl: './wordsoccer.component.html',
  styleUrls: ['./wordsoccer.component.css'],
})
export class WordsoccerComponent implements OnInit {
  words: Word[] | undefined;

  wordClue = new FormControl('');
  answer = new FormControl('');

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http
      .getAllWordsSoccer()
      .subscribe((data: Word[]) => (this.words = data));
  }

  addWord() {
    const word: PostWord = {
      wordClue: this.wordClue.value,
      word: this.answer.value,
    };
    this.http.postWordsSoccer(word).subscribe((data) => console.log(data));
  }

  clearTable() {
    this.http.clearWorldSoccerTable().subscribe(() => console.log('deleted'));
  }
}
