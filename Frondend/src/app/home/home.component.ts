import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  question = faQuestionCircle;

  color = '';
  mobile: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (window.screen.width < 780) { // 768px portrait
      this.mobile = true;
      }
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
