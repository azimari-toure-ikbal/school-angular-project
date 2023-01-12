import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountersComponent } from './todo-manager/counters/counters.component';
import { TodoFormComponent } from './todo-manager/todo-form/todo-form.component';
import { TodoItemComponent } from './todo-manager/todo-item/todo-item.component';
import { TodoListControlsComponent } from './todo-manager/todo-list-controls/todo-list-controls.component';
import { TodoListComponent } from './todo-manager/todo-list/todo-list.component';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {path:"",component:TodoManagerComponent, children:[
    {path:"edit/:id",component:TodoManagerComponent},
    {path:"categorie/",component:TodoManagerComponent},
    {path:"categorie/:category",component:TodoManagerComponent},
    {path:"search",component:TodoManagerComponent}
  ]},
  {path:"**",redirectTo:""}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoItemComponent,
    CountersComponent,
    TodoListControlsComponent,
    TodoListComponent,
    TodoManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
