import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  newTitle = '';
  description = '';
  todos: ITask[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getTasks().subscribe(data => this.todos = data);
  }

  addTask(event) {

    const todoObj = <ITask> {
      title: this.newTitle,
      description: this.description,
      status: ''
    };

    this._taskService.addTasks(todoObj).subscribe(data => this.todos.push(data));
    this.newTitle = '';
    this.description = '';
  }

  setTaskToDone(i) {
    const todoObj = <ITask> {
      id: i,
      status: 'DONE'
    };
    this._taskService.setTaskToDone(todoObj).subscribe(data => {
      const task = this.todos.find(taskEntity => taskEntity.id === i);
      task.status = 'DONE';
    });
  }

  delTask(i) {
    this._taskService.deleteTask(i).subscribe(data => this.todos.splice(i, 1));
  }

}
