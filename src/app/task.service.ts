import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: {
    id: number;
    name: string;
    priority: string;
    completed: boolean;
  }[] = [];
  private nextId: number = 1;

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
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completion(task: any) {
    const foundTask = this.tasks.find((t) => t.id === task.id);
    if (foundTask) {
      foundTask.completed = true;
    }
  }
  
  again(task: any) {
    const foundTask = this.tasks.find((t) => t.id === task.id);
    if (foundTask) {
      foundTask.completed = false;
    }
  }
  

  getUncompletedTasks() {
    return this.tasks.filter((task) => task.completed === false);
  }

  getUncompletedTasksWithHighPriority(priority: string) {
    return this.tasks.filter((task) => task.completed === false && task.priority === priority);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed === true);
  }
}
