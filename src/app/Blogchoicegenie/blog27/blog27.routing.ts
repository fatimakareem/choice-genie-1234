import { Routes } from '@angular/router';
 
 
 
import { Blog27Component } from './blog27.component';


export const Blog27Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog27Component
        }]
    }
];
