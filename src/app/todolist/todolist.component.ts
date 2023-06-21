import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TodolistService } from './todolist.service';
import { Todo } from './todo';

@Component({
  selector: 'Sotatek-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  currentD = new Date().toISOString().substring(0,10);
  formValue: Todo[] = [];
  item: any = null;
  bulk: any = null;
  titleTodo: any = null;
  Checked_list: Todo[] = [];
  TasksSearch: Todo[] = [];

  profileForm = this.fb.group({
    title: ['', Validators.compose([
      Validators.required
    ])],
    description: [''],
    duedate: [this.currentD],
    piority: ['normal'],
  });

  updateForm = this.fb.group({
    titleUd: [''],
    descriptionUd: [''],
    duedateUd: [''],
    piorityUd: [''],
  });

  constructor(private fb: FormBuilder, private service: TodolistService) { }

  ngOnInit(): void {
    this.onSubmit();
    this.UpdateTask();
    this.DeleteBulk();
  }

  onSubmit() {
    // Check dublicated title
    if((this.service.checkTitle(this.profileForm.value.title || '')))
    return this.titleTodo = 'title dublicated';
    // Create new task
    if(this.profileForm.value.title != null && this.profileForm.value.title != ''){
    let abc: Todo = {
      title: (this.profileForm.value.title).toString(),
      description: (this.profileForm.value.description) || '',
      duedate: (this.profileForm.value.duedate)!.toString(),
      piority: (this.profileForm.value.piority)!.toString()
    }
    this.service.Add(abc);
    this.profileForm.reset();
    this.profileForm.controls.duedate.setValue(this.currentD);
    this.profileForm.controls.piority.setValue('normal');
    this.formValue = this.service.GetAll();
    this.titleTodo = null;
    // tasks will be sorted by Due date from the near future to far future
    this.formValue.sort((a: Todo, b: Todo) => {
      return <any>new Date(a.duedate) - <any>new Date(b.duedate);
    });
    return this.formValue;
   }
    return this.formValue;
   }

  UpdateTask(){
      let abc: Todo = {
        title: this.item?.title,
        description: (this.updateForm.value.descriptionUd)!.toString(),
        duedate: (this.updateForm.value.duedateUd)!.toString(),
        piority: (this.updateForm.value.piorityUd)!.toString()
      }
      this.service.Update(abc);
      this.item = null;
      return this.formValue = this.service.GetAll();
  }

  Details(abc: Todo){
    this.item = this.formValue.find( x => x.title == abc.title);
  }

  DeleteTask(abc: Todo){
     if(abc==null || abc==undefined)
     return this.formValue;
     this.service.Delete(abc);
     this.item = null;
     return this.formValue = this.service.GetAll();
  }

  onChecked(abc: Todo, event: any) {
    const checked = event.target.checked;
    console.log(checked);
     if (checked==true) {
      this.Checked_list.push(abc);
       console.log(this.Checked_list)
        }
      if(checked==false) {
        this.Checked_list=this.Checked_list.filter(x => x.title != abc.title);
        console.log(this.Checked_list)
      }
   }

  DeleteBulk(){
    this.Checked_list.forEach( x => {
      this.service.Delete(x);
    })
    this.formValue = this.service.GetAll();
    return this.Checked_list = [];
  }

  SearchTask(abc: any){
    let xyz = this.formValue.filter( x => x.title.includes(abc.target.value));
    this.TasksSearch = xyz
    if(abc.target.value==''||abc.target.value==null||abc.target.value==undefined)
    this.TasksSearch=[];
    return this.TasksSearch;
  }
}


