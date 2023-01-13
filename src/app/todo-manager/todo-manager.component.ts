import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent {
  title = 'To - Do List 📋';

  taskToEdit:any;

  tasks: Array<Task>  =[];
  constructor(private taskService:TaskService, private router:Router, private route:ActivatedRoute, private toastr:ToastrService) {
    this.toastr.success("Bienvenue dans votre gestionnaire de tâches", "Bienvenue", {newestOnTop:true, closeButton:true, progressBar:true, timeOut:5000});
    this.updateArray();
  }

  filterByCategory(value:string){
    if(value==="tout"){
      this.updateArray();
      return;
    }
    this.taskService.getTasksByCategory(value).subscribe(data=>{
      this.tasks=data;
    });
  }

  searchTask(value:string){
    this.taskService.getTasksByTitle(value).subscribe(data=>{
      this.tasks=data;
    });
  }

  addTask(taskToAdd:Task){
    this.taskService.addTask(taskToAdd).subscribe({next:()=>console.log(),error:(err)=> console.log(err)});
    this.updateArray();
  }

  updateArray(){
    this.taskService.getAll().subscribe(data=>{
      this.tasks=data;
    });
  }

  changeTaskStatus(value:any){
    let index=this.tasks.indexOf(value);
    this.tasks[index]=value;
    this.taskService.updateTask(value).subscribe({next:()=>console.log(),error:(err)=> console.log(err)});
    this.updateArray();
  }

  deleteTask(taskToDelete:any){
    this.taskService.deleteTask(taskToDelete).subscribe({next:()=>console.log(),error:(err)=> console.log(err)});
    this.updateArray();
  }

  editTask(value:Task){
    // console.log("edit");
    // console.log(value);
    this.taskToEdit=value;
    this.router.navigate(["edit",value.id]);

  }

  handleTaskEdition(value:any){
    // console.log("handle");
    // console.log(value);
    this.taskService.updateTask(value).subscribe({next:()=>console.log(),error:(err)=> console.log(err)});
    this.updateArray();
    this.taskToEdit=undefined;
    this.toastr.success("Modification de la tâche "+value.title+" effectuée", "Modification", {newestOnTop:true, closeButton:true, progressBar:true, timeOut:5000});
    this.router.navigate([""]);
  }
}
