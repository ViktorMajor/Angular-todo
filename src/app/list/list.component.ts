import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private taskService: TaskService) {}

  windowItems: any[] = [];

  addWindow() {
    if (this.windowItems.length === 0) {
      this.windowItems.push({});
      console.log(this.windowItems);
    }
  }

  clearWindow() {
    this.windowItems = [];
  }

  addTask(taskName: string, priority: string) {
    const initialCompletedValue = "uncompleted"; 
    this.taskService.addTask(taskName, priority, initialCompletedValue);
    this.clearWindow();
  }
}
