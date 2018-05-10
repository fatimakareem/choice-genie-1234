import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { Blog1Routes } from './blog1.routing';
import { Blog1Component } from './blog1.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Blog1Routes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        Blog1Component
    ],
    providers: [

    ]
})

export class Blog1Module {}
