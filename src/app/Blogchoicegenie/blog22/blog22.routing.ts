import { Routes } from '@angular/router';
 
 
import { Blog22Component } from './blog22.component';


export const Blog22Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog22Component
        }]
    }
];
