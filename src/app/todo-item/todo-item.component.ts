import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  btnColor: any = 'btn-info';
  btnText: any = 'En cours';

  switchStatus() {
    switch (this.btnColor) {
      case 'btn-info':
        this.btnColor = 'btn-success';
        this.btnText = 'Terminé';
        break;
      case 'btn-success':
        this.btnColor = 'btn-warning';
        this.btnText = 'En attente';
        break;
      case 'btn-warning':
        this.btnColor = 'btn-info';
        this.btnText = 'En cours';
        break;
    }
  }

}
