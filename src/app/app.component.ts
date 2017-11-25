import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputHint = "What needs to be done? 呀蛤～";
  todos = [];
  todo = '';
  filterType = 'All';

  addTodos() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      // this.todos.push(newTodo);
      this.todos = this.todos.concat(newTodo);
      // this.todos = [...this.todos, newTodo];
      // [...]方式就是展開
      this.todo = '';
    }
  }
  removeAllTodo($event){
    this.todos = this.todos.filter(item => !item.done);
  }
  filterTypeChang($event){
    this.filterType = $event;
  }
}
