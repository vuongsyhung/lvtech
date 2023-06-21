import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnimationlogoComponent } from './header/animationlogo/animationlogo.component';

const routes: Routes = [

  { path: 'header', component: HeaderComponent },
  { path: 'assignment', loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule) },
  { path: 'todolist', loadChildren: () => import('./todolist/todolist.module').then(m => m.TodolistModule) },
  { path: '**', component: NotfoundComponent },
  { path: 'logo', component: AnimationlogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
