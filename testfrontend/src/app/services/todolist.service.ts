import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todolist } from '../model/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private url = 'http://127.0.0.1:8000/api/';

  getAllListtodo(){
    return this.http.get(this.url+"listTodo",this.httpOptions);
  }

  addListTodo(listtodo: Todolist){
    return this.http.post(this.url+"addlistTodo/",listtodo,this.httpOptions);
  }

  updateListTodo(listtodo: Todolist){
    return this.http.put(this.url + 'edititemTodo/' , listtodo);
  }

  deleteListTodo(id:number){
    return this.http.delete(this.url + 'deleteitemTodo/' + id);
  }

  getListTodoById(id:number){
    return this.http.get(this.url + `showitemTodo/${id}`, this.httpOptions);
  }
}
