import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { EditTaskComponent} from './task/edit-task.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task/:id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
