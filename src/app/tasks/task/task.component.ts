import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksComponent } from '../tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task

    constructor(private tasksService: TaskService) {

    }
    nowCompleteTask() {
        this.tasksService.removeTask(this.task.id)

    }

}