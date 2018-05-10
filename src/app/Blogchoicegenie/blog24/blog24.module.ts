import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { Blog24Routes } from './blog24.routing';
import { Blog24Component } from './blog24.component';
 
 
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Blog24Routes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        Blog24Component
    ],
    providers: [

    ]
})

export class Blog24Module {}
