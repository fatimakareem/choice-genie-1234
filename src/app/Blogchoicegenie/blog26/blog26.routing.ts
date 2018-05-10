import { Routes } from '@angular/router';
 
 
 
import { Blog26Component } from './blog26.component';


export const Blog26Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog26Component
        }]
    }
];
