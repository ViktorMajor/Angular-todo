import { Component } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
  selector: "app-uncompleted",
  templateUrl: "./uncompleted.component.html",
  styleUrls: ["./uncompleted.component.css"],
})
export class UncompletedComponent {
  constructor(private taskService: TaskService) {}

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  completion(task: any) {
    this.taskService.completion(task);
  }
  
  get uncompletedItems() {
    return this.taskService.getUncompletedTasks();
  }
}
