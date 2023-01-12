import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-controls',
  templateUrl: './todo-list-controls.component.html',
  styleUrls: ['./todo-list-controls.component.css']
})
export class TodoListControlsComponent {

  @Output() filterChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() searchEvent:EventEmitter<string> = new EventEmitter<string>();

  handleSearch(value:any){
    this.searchEvent.emit(value.value);
    //console.log(value.value);
  }

  handle(value:any){
    this.filterChange.emit(value.innerHTML.toLowerCase());
    //console.log(value.innerHTML.toLowerCase());
  }
}
