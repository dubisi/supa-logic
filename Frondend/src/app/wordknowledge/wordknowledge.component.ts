import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostWord, Word } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wordknowledge',
  templateUrl: './wordknowledge.component.html',
  styleUrls: ['./wordknowledge.component.css'],
})
export class WordknowledgeComponent implements OnInit {
  words: Word[] | undefined;

  wordClue = new FormControl('');
  answer = new FormControl('');

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http
      .getAllWordKnowledge()
      .subscribe((data: Word[]) => (this.words = data));
  }

  addWord() {
    const word: PostWord = {
      wordClue: this.wordClue.value,
      word: this.answer.value,
    };
    this.http.postWordKnowledge(word).subscribe((data) => console.log(data));
  }

  clearTable() {
    this.http
      .clearWorldKnowledgeTable()
      .subscribe(() => console.log('deleted'));
  }
}
