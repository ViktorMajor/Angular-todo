import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private taskService: TaskService) {}

  @Output() clearEvent: EventEmitter<void> = new EventEmitter<void>();

  addTask(taskName: string, priority: string) {
    this.clearEvent.emit();
    const initialCompletedValue = "uncompleted"; 
    this.taskService.addTask(taskName, priority, initialCompletedValue);
  }
  
  
  
}