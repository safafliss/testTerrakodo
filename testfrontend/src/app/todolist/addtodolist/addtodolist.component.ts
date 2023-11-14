import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todolist } from 'src/app/model/todolist';
import { TodolistService } from 'src/app/services/todolist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtodolist',
  templateUrl: './addtodolist.component.html',
  styleUrls: ['./addtodolist.component.css']
})
export class AddtodolistComponent implements OnInit {
  public id: number;
  public title: string;
  public description: string;
  public prioritylevel: number;
  public dueDate: Date;

  constructor(
    private todolistService: TodolistService,
    private router: Router
  ) {}
  public todolist: Todolist;

  ngOnInit(): void {
  }
  addTodolist() {
    this.todolist = {
      id: null,
      title: this.title,
      prioritylevel: this.prioritylevel,
      description: this.description,
      dueDate: this.dueDate
    };
    this.todolistService.addListTodo(this.todolist).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/todolists']);
      Swal.fire('Succès!', 'Todo Item ajouté correctement');
    });
  }

}
