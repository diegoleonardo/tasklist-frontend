import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ITask } from '../ITask';

@Component({
  selector: 'app-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  id = '';
  newTitle = '';
  description = '';
  task: ITask;

  constructor(private _taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        const taskId = params['id'];
        this._taskService.getTask(taskId).subscribe(data => {
            this.task = data;
            this.id = this.task.id;
            this.newTitle = this.task.title;
            this.description = this.task.description;
        });
      });
  }
  editTask(event) {

    const todoObj = <ITask> {
      id: this.id,
      title: this.newTitle,
      description: this.description
    };

    this._taskService.editTask(todoObj).subscribe(data => console.log(data));
    this.router.navigateByUrl('');
  }
}
