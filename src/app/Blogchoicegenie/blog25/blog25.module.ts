import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
 
import { Blog25Routes } from './blog25.routing';
import { Blog25Component } from './blog25.component';
 
 
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Blog25Routes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        Blog25Component
    ],
    providers: [

    ]
})

export class Blog25Module {}
