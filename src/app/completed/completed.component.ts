import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.css'],
})
export class CompletedComponent implements OnInit {
    selectedTask: Task | undefined;
    completedTasks: Task[] = [];

    @Output() foo = new EventEmitter<number>();

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.taskService.getCompletedTasks().subscribe(tasks => {
            this.completedTasks = tasks;
        });
    }

    deleteTask(taskId: number) {
        // console.log('deleteTask');
        // this.foo.emit(taskId);
        // this.taskService.deleteTask(taskId);
        this.taskService.deletedTaskEvent.next(taskId);
    }
    again(task: Task) {
        this.selectedTask = task;
        this.taskService.again(task);
    }
}
