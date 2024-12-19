import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TaskService } from '../task/task.service';
@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    @Input() userId!: string;
    @Output() cancel = new EventEmitter();
    @Output() add = new EventEmitter<NewTaskData>()
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate = '';

    constructor(private taskService: TaskService) { }
    onCancel() {
        this.cancel.emit();
    }

    onSubmit() {
        this.taskService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDueDate
        },
            this.userId
        )
        this.cancel.emit();
    }
}