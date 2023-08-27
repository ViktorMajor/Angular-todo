import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private taskService: TaskService) {}

  title = 'todo-app';
  windowItems: any[] = [];

  addWindow() {
    if ((this.windowItems = [])) {
      this.windowItems.push({});
      console.log(this.windowItems)
    }
  }

  clearWindow() {
    this.windowItems = [];
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  completion(task: any) {
    this.taskService.completion(task);
  }

  again(task: any) {
    this.taskService.again(task);
  }

  get uncompletedItems() {
    return this.taskService.getUncompletedTasks();
  }

  get completedItems() {
    return this.taskService.getCompletedTasks();
  }
}
