import { Routes } from '@angular/router';
 
 
 
import { Blog24Component } from './blog24.component';


export const Blog24Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog24Component
        }]
    }
];
