import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todolist } from 'src/app/model/todolist';
import { TodolistService } from 'src/app/services/todolist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edittodolist',
  templateUrl: './edittodolist.component.html',
  styleUrls: ['./edittodolist.component.css']
})
export class EdittodolistComponent implements OnInit {


  public todolist: Todolist;
  public title: string;
  public prioritylevel: number; 
  public dueDate: Date;
  public description: string;

  constructor(private route: Router, private currentRoute: ActivatedRoute, private todolistService: TodolistService) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
     if(id!=null){
       this.todolistService.getListTodoById(id).subscribe(
         (data: Todolist)=>{
          this.todolist=data;
          console.log(this.todolist);
          //this.populateFormFields();
        }
       )
     }
  }

  onUpdate(){
    this.todolistService.updateListTodo(this.todolist).subscribe(
      () => this.route.navigate(['/admin/todolists']),
      () => {
        console.log('error'),
        () =>{
          console.log('complete')
        }
      }
    )
    Swal.fire('Succès!', 'Todo item modifié correctement');
}
}
