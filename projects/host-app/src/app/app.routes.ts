import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from '../../../mfe-app/src/app/todo-list/todo-list.component';
//import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'todo-list',
        component:TodoListComponent
       //loadChildren:
    }
];
