import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './task/task.service';
@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})

export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: String;
    isAddingTask: boolean = false;

    constructor(private tasksService: TaskService) { }

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId);

    }

    // onCompleteTask(id: string) {
    //     this.isAddingTask = false;
    // }



    onStartAddTask() {
        this.isAddingTask = true;
    }

    onTaskCancel() {
        this.isAddingTask = false;
    }




    // getData(event: any) {
    //     this.tasks.push(event)
    // }
}