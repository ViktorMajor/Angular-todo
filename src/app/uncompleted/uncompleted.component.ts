import { Component, EventEmitter, Output } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
  selector: "app-uncompleted",
  templateUrl: "./uncompleted.component.html",
  styleUrls: ["./uncompleted.component.css"],
})
export class UncompletedComponent {
  constructor(private taskService: TaskService) {}
  @Output() foo = new EventEmitter<number>();


  deleteTask(taskId: number) {
    // this.foo.emit(taskId);
    // this.taskService.deleteTask(taskId);
    this.taskService.deletedTaskEvent.next(taskId);
  }

  completion(task: any) {
    this.taskService.completion(task);
  }
  
  get uncompletedItems() {
    console.log( this.taskService.getUncompletedTasks())
    return this.taskService.getUncompletedTasks();
  }
  
}
