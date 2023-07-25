import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostWord, Word } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wordamerican',
  templateUrl: './wordamerican.component.html',
  styleUrls: ['./wordamerican.component.css'],
})
export class WordamericanComponent implements OnInit {
  words: Word[] | undefined;

  wordClue = new FormControl('');
  answer = new FormControl('');

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http
      .getAllWordsAmerican()
      .subscribe((data: Word[]) => (this.words = data));
  }

  addWord() {
    const word: PostWord = {
      wordClue: this.wordClue.value,
      word: this.answer.value,
    };
    this.http.postWordAmerican(word).subscribe((data) => console.log(data));
  }

  clearTable() {
    this.http.clearWorldAmericanTable().subscribe(() => console.log('deleted'));
  }
}
