import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) selected!: boolean;
    @Input({ required: true }) user!: User;
    @Output() select = new EventEmitter();

    get imagePath() {
        return './assets/users/' + this.user.avatar;
    }
    onUserCLick() {
        this.select.emit(this.user.id)
    }
}
