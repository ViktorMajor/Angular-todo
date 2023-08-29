import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Todo app';

    constructor(private taskService: TaskService) {}
    ngOnInit(): void {
        this.taskService.deletedTaskEvent.subscribe(taskId => {
            console.log('deleteTask', taskId);
        });
    }
}
