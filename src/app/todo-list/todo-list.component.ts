import { Component, OnInit } from '@angular/core';
import {todo} from "../core/model/ToDo";
import {CalculService} from "../Service/calcul.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTodo :todo[]=[
  {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
  {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
  {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
  {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}];
  constructor(private calcul:CalculService) { }

  val:any;
  numOfToDo(){
    this.val= this.calcul.getNumberOf(this.listTodo,"completed",true);
  }

  ngOnInit(): void {
  }

}
