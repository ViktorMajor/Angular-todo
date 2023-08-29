import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    constructor(private taskService: TaskService) {}

    isOpen = false;

    windowItems: any[] = [];

    openWindow() {
        this.isOpen = !this.isOpen;
    }

    closeWindow() {
        this.isOpen = false;
    }

    addTask(taskName: string, priority: string) {
        const initialCompletedValue = 'uncompleted';
        this.taskService.addTask(taskName, priority, initialCompletedValue);
        this.closeWindow();
    }
}
