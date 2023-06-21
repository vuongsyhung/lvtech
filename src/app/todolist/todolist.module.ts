import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodolistModule { }
