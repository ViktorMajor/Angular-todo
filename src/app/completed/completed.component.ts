import { Component } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  constructor(private taskService: TaskService) {}

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
  again(task: any) {
    this.taskService.again(task);
  }

  get completedItems() {
    return this.taskService.getCompletedTasks();
  }
}
