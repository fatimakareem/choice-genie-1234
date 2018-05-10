import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { Blog22Component } from './blog22.component';
import { Blog22Routes } from './blog22.routing';
 
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Blog22Routes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        Blog22Component
    ],
    providers: [

    ]
})

export class Blog22Module {}
