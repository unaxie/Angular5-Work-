import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputHint = "What needs to be done? 呀蛤～";
  todos = [];

  addTodos(element: HTMLInputElement) {
    // console.log(target.value);
    if (element.value) {
      this.todos.push(element.value);
    }
  }
}
