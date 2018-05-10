import { Routes } from '@angular/router';
 
 
import { Blog23Component } from './blog23.component';


export const Blog23Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog23Component
        }]
    }
];
