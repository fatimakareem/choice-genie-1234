import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { GetreviewComponent } from './getreview.component';
import { GetreviewRoutes } from './getreview.routing';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GetreviewRoutes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
           
          })
    ],
    declarations: [
        GetreviewComponent
    ],
    providers: [

    ]
})

export class GetreviewModule {}
