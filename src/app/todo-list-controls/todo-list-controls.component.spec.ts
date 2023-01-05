import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListControlsComponent } from './todo-list-controls.component';

describe('TodoItemControlsComponent', () => {
  let component: TodoListControlsComponent;
  let fixture: ComponentFixture<TodoListControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
