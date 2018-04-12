import { Routes } from '@angular/router';


import { ForgetpasswordComponent } from './forgetpassword.component';

export const ForgetpasswordRoutes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: ForgetpasswordComponent
        }]
    }
];
