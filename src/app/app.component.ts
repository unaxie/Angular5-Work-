import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  inputHint = "What needs to be done? 呀蛤～";
  todos = [];
  todo = "";
  filterType = "All";
  istoggleAll = false;
  apiUrl = "http://localhost:3000/todos";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.todos = data;
    });
  }
  addTodos() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };
      // this.todos.push(newTodo);
      // this.todos = this.todos.concat(newTodo);
      // this.todos = [...this.todos, newTodo];
      // [...]方式就是展開
      this.todo = "";
      this.http.post(this.apiUrl, newTodo).subscribe(data => {
        this.todos = this.todos.concat(data);
        console.log();
      });
    }
  }
  removeAllTodo($event) {
    // this.todos = this.todos.filter(item => !item.done);
    this.todos.filter(item => item.done).forEach(item => {
      this.removeTodo(item);
    });
  }
  filterTypeChang($event) {
    this.filterType = $event;
  }
  toggleAllChange() {
    this.todos.forEach(item => {
      item.done = this.istoggleAll;
    });
  }
  removeTodo(todo) {
    this.todos = this.todos.filter(item => item !== todo);
    this.http.delete(`${this.apiUrl}/${todo.id}`).subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    });
  }
  updateTodo(todo) {
    this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
  }
}
