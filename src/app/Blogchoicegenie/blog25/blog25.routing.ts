import { Routes } from '@angular/router';
 
 
 
import { Blog25Component } from './blog25.component';


export const Blog25Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog25Component
        }]
    }
];
