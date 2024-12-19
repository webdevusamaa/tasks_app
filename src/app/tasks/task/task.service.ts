import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task.model";
@Injectable({
    providedIn: 'root', // Makes TaskService available throughout the app
})
export class TaskService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];
    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks)
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === task.userId);
    }

    addTask(taskdata: NewTaskData, userId: string) {
        this.tasks.unshift({
            userId: userId,
            id: new Date().getTime().toString(),
            title: taskdata.title,
            summary: taskdata.summary,
            dueDate: taskdata.date

        })

        this.savedata();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.savedata();
    }
    savedata() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}
