import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks:Array<Task> =[];

  @Output() taskDeletion:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() statusChange:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskEdition:EventEmitter<Task> = new EventEmitter();

  deleteTask(taskToDelete:Task){
    this.taskDeletion.emit(taskToDelete);
  }

  changeTaskStatus(value:Task){
    this.statusChange.emit(value);
  }

  handleEdition(value:Task){
    this.taskEdition.emit(value);
  }
}
