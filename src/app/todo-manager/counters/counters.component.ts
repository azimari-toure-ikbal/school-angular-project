import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnChanges {
  @Input() tasks:Array<Task> =[];

  tasksStatus:any;
  constructor() {
    // console.log("constructor counters");
    // console.log(this.tasks);
    // create an associative array to store the number of tasks of each 3 status

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log("ngOnChanges counters");
    this.tasksStatus = {
      "enattente":this.getNumberOfTasks("en attente"),
      "encours":this.getNumberOfTasks("en cours"),
      "termine":this.getNumberOfTasks("terminé")
    }
  }

  //compute the number of tasks of each status
  getNumberOfTasks(status:string){
    //console.log(this.tasks);
    return this.tasks.filter(task=>task.status===status).length;
  }
}
