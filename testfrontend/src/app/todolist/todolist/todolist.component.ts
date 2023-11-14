import { Component, Input, OnInit } from '@angular/core';
import { Todolist } from 'src/app/model/todolist';
import { TodolistService } from 'src/app/services/todolist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private todolistService:TodolistService) { }
  public todolists:Todolist[];
  ngOnInit(): void {
    this.todolistService.getAllListtodo().subscribe((data)=>{
      this.todolists = data as Todolist[]
    })
  }
  confirmationSuppressionTodolist(todolist: Todolist) {
    Swal.fire({
      title: 'Êtes-vous sûr de supprimer ce todo item?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteTodolist(todolist); // Appel de la fonction de suppression
      }
    });
  }
  deleteTodolist(todolist : Todolist) {
    let i = this.todolists.indexOf(todolist);
    this.todolistService.deleteListTodo(todolist.id).subscribe(
      ()=>{
        this.todolists.splice(i,1)
      } 
    );
  }

}
