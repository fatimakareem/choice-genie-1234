import { Routes } from '@angular/router';
 
import { Blog21Component } from './blog21.component';


export const Blog21Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog21Component
        }]
    }
];
