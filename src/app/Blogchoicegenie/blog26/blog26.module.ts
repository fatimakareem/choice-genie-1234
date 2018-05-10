import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { Blog26Routes } from './blog26.routing';
import { Blog26Component } from './blog26.component';
 
 
 
 
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Blog26Routes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        Blog26Component
    ],
    providers: [

    ]
})

export class Blog26Module {}
