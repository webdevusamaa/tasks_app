// Import Angular core and other necessary modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // If forms are used


// Import components
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component'; // Example of an additional component
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskService } from './tasks/task/task.service';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/task/tasks.module';
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
    providers: [TaskService],        // Services to inject into components
    bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppModule { }
