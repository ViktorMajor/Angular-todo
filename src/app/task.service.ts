import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';

export interface Task {
    id: number;
    name: string;
    priority: string;
    completed: boolean;
    customColor?: string;
}

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private tasks: Task[] = [];
    private nextId: number = 1;

    private tasksSubject: Subject<Task[]> = new Subject<Task[]>();
    // private bbahaviourstasksSubject: Subject<Task[]> = new BehaviorSubject<Task[]>({
    //     id: 1,
    //     name: 'test',
    //     priority: 'high',
    //     completed: false,
    // });
    public deletedTaskEvent = new Subject<number>();

    constructor(private http: HttpClient) {}

    addTask(taskName: string, priority: string, completed: string) {
        this.tasks.push({
            id: this.nextId,
            name: taskName,
            priority: priority,
            completed: false,
        });
        this.nextId++;
        console.log(this.tasks);
    }

    deleteTask(taskId: number) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    completion(task: any) {
        const foundTask = this.tasks.find(t => t.id === task.id);
        if (foundTask) {
            foundTask.completed = true;
            const filteredTasks = this.tasks.filter(t => t.id !== task.id);

            this.tasksSubject.next([...filteredTasks, foundTask as Task]);
        }
    }

    again(task: Task) {
        const foundTask = this.tasks.find(t => t.id === task.id);
        console.log('🚀 ~ file: task.service.ts:51 ~ TaskService ~ again ~ foundTask:', foundTask);
        if (foundTask) {
            foundTask.completed = false;
        }
    }

    getUncompletedTasks() {
        return this.tasks.filter(task => task.completed === false);
    }

    getUncompletedTasksWithHighPriority(priority: string) {
        return this.tasks.filter(task => task.completed === false && task.priority === priority);
    }

    getCompletedTasks(): Observable<Task[]> {
        return this.tasksSubject.asObservable();
    }
}
