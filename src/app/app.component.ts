import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint= 'What needs to be done? 呀蛤～';
  todos = [];

  addtodos(value) {
    console.log('trytryla');
    this.todos = value;
  }
}
