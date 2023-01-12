import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url:string = "http://localhost:3000/tasks";
  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<Array<Task>>(this.url);
  }

  addTask(taskToAdd:Task){
    taskToAdd.status="en cours";
    return this.http.post(this.url,taskToAdd);
  }

  deleteTask(taskToDelete:Task){
    return this.http.delete(this.url+'/'+taskToDelete.id);
  }

  updateTask(task:Task){
    console.log("value update: ");
    console.log(task);
    return this.http.put(this.url+'/'+task.id, task);
  }

  getTaskById(id:number){
    return this.http.get<Task>(this.url+'/'+id);
  }

  getTasksByCategory(category:string){
    return this.http.get<Array<Task>>(this.url+'?category='+category);
  }

  getTasksByTitle(title:string){
    //get all tasks with title containing the value of title
    return this.http.get<Array<Task>>(this.url+'?title_like='+title);
  }

}
