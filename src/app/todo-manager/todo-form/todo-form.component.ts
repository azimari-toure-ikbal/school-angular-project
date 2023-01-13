import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Input() task:any;


  @Output() taskToAdd:EventEmitter<Task> = new EventEmitter();
  @Output() taskToEdit:EventEmitter<Task> = new EventEmitter();
  handleAdd(myForm:NgForm){

    (this.task===undefined) ? this.taskToAdd.emit(myForm.value) : this.taskToEdit.emit(myForm.value);
    myForm.reset();
  }
}
