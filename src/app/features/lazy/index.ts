import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import 'meteor-client';
import { LazyActions } from './lazy.actions';
import { routes } from './lazy.routing';

import { LazyComponent } from './lazy.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        LazyComponent
    ],
    providers: [
        LazyActions
    ]
})

export class LazyModule { }
