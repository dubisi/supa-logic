import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faQuestionCircle,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Results, Word } from '../data-interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-worldamerican',
  templateUrl: './worldamerican.component.html',
  styleUrls: ['./worldamerican.component.css'],
  animations: [
    trigger('one1', [
      state(
        'one',
        style({
          opacity: 1,
        })
      ),
      state(
        'two',
        style({
          opacity: 1,
        })
      ),
      transition('void => one', [animate('9s 4s ease-in')]),
    ]),
  ],
})
export class WorldamericanComponent implements OnInit {
  question = faQuestionCircle;
  home = faHome;
  share = faShareSquare;

  isOpen = true;
  answer = new FormControl('');

  word: Word | undefined;

  count: string | null | undefined;
  isSpecial: boolean = false;

  first: Results | undefined;
  second: Results | undefined;
  third: Results | undefined;
  fourth: Results | undefined;
  fith: Results | undefined;
  sixth: Results | undefined;

  correctButNotInTheRightPosition: string = 'background-color:yellow';
  correctInTheRightPosition: string = 'background-color:green';
  notCorrectAndNotInTheWord: string = 'background-color:gray';

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getWordAmerican().subscribe((data: Word) => {
      this.word = data;
      if (this.word) {
        let id = this.word.id;
        let val: string | null = localStorage.getItem('id');

        if (val == null || val != `${id}`) {
          localStorage.setItem('countAmerican', '100');
          localStorage.setItem('id', `${id}`);
        }
        this.count = localStorage.getItem('countAmerican');
      }
    });
  }

  validateAnswer() {
    this.isOpen = !this.isOpen;

    this.clear();

    const answers = this.answer.getRawValue();

    this.answer.reset();

    const wordArray: string[] | undefined = this.word?.word.split('');

    if (answers!.length == 6 && answers != null) {
      for (let i = 0; i <= wordArray!.length; i++) {
        if (wordArray![i] == answers.charAt(i)) {
          this.validate(i, answers, this.correctInTheRightPosition);
        } else if (this.word?.word.includes(answers.charAt(i))) {
          this.validate(i, answers, this.correctButNotInTheRightPosition);
        } else {
          this.validate(i, answers, this.notCorrectAndNotInTheWord);
        }
      }
      if (this.word?.word != answers) {
        if (Number(this.count) > 0) {
          this.count = `${parseInt(`${this.count}`) - 10}`;
          localStorage.setItem('countAmerican', `${this.count}`);
        }
      }
    }
  }

  validate(i: number, answer: string, colorCode: string) {
    switch (i) {
      case 0:
        this.first = { color: colorCode, letter: answer.charAt(i) };
        break;
      case 1:
        this.second = { color: colorCode, letter: answer.charAt(i) };
        break;
      case 2:
        this.third = { color: colorCode, letter: answer.charAt(i) };
        break;
      case 3:
        this.fourth = { color: colorCode, letter: answer.charAt(i) };
        break;
      case 4:
        this.fith = { color: colorCode, letter: answer.charAt(i) };
        break;
      case 5:
        this.sixth = { color: colorCode, letter: answer.charAt(i) };
        break;
    }
  }

  clear() {
    this.first = undefined;
    this.second = undefined;
    this.third = undefined;
    this.fourth = undefined;
    this.fith = undefined;
    this.sixth = undefined;
  }

  displayModal() {
    document.getElementById('myModal')!.style.display = 'block';
  }

  closeTheModal() {
    document.getElementById('myModal')!.style.display = 'none';
  }

  displayShareModal() {
    document.getElementById('myShareModal')!.style.display = 'block';
  }

  closeTheShareModal() {
    document.getElementById('myShareModal')!.style.display = 'none';
  }
}
const controlDown = (event: MouseEvent) => {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal')!.style.display = 'none';
  } else if (event.target == document.getElementById('myShareModal')) {
    document.getElementById('myShareModal')!.style.display = 'none';
  }
};
addEventListener('mousedown', controlDown);
