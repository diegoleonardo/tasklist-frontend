import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from './ITask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private _baseUrl = 'http://localhost:55613/api/Task/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this._baseUrl);
  }

  getTask(id): Observable<ITask> {
    return this.http.get<ITask>(`${this._baseUrl}/${id}`, this.httpOptions);
  }

  addTasks(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this._baseUrl, task, this.httpOptions);
  }

  editTask(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this._baseUrl}/${task.id}`, task, this.httpOptions);
  }

  setTaskToDone(task: ITask): Observable<ITask> {
    return this.http.patch<ITask>(this._baseUrl, task, this.httpOptions);
  }

  deleteTask(id) {
    return this.http.delete(`${this._baseUrl}/${id}`, this.httpOptions);
  }
}
