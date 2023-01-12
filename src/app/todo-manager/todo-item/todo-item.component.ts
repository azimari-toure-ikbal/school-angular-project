import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import * as task from '../../task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  //@Input() task:any;
  @Input() task : any;
  // @Input() set taskValue(value:task.Task){
  //   this.task = value;
  //   this.updateStatus();
  // }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.task = changes['task'].currentValue;
    this.updateStatus();
  }

  updateStatus(){
    this.btnText = this.task.status;
    this.btnColor = this.btn.get(this.btnText);
  }

  btnColor: string="" ;
  btnText: string="" ;

  btn:any = new Map([
    ["en cours", "btn-info",],
    ["terminé", "btn-success"],
    ["en attente", "btn-warning"]
  ]);

  btnColors:Array<string> = ["btn-info", "btn-success", "btn-warning"];

  switchStatus() {
    var index = this.btnColors.indexOf(this.btnColor);

    console.log(index);
    if(index===undefined){
      console.log("non");
      return;
    }
    index = (index+1 < this.btnColors.length) ? index+1 : 0;
    this.task.status=this.getValueAtIndex(this.btn.keys(), index);
    // console.log("clés");
    // console.log(this.btn.keys());
    // console.log(this.task);
    this.updateStatus();
    this.statusChange.emit(this.task);
  }

  getValueAtIndex(iterator:any, index:any) {
    let currentIndex = 0;
    let currentValue = iterator.next();
    while (currentIndex < index) {
      currentValue = iterator.next();
      currentIndex++;
    }
    return currentValue.value;
  }

  @Output() statusChange:EventEmitter<task.Task> = new EventEmitter();
  @Output() taskDeletion:EventEmitter<task.Task> = new EventEmitter();
  @Output() taskEdition:EventEmitter<task.Task> = new EventEmitter();

  handleDelete(){
    //confirm deletion with alert
    if(confirm("Voulez-vous vraiment supprimer cette tâche ?"))
      this.taskDeletion.emit();
  }

  handleEdit(){
    this.taskEdition.emit();
  }
}
