import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupersiderbarComponent } from './supersiderbar.component';


@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SupersiderbarComponent ],
    exports: [ SupersiderbarComponent ]
})

export class SidebarModule {}
