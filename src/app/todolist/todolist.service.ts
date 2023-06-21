import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  items: Todo[] = [];

  constructor() { }

  Save() {
  localStorage.setItem("todo", JSON.stringify(this.items));
 }

  GetAll() {
  let value = localStorage.getItem("todo");
  if (value != '' && value != null && typeof value != "undefined") {
  return this.items = JSON.parse(value!);
  }
  }

  Add(abc: Todo) {
    this.items.push(abc);
    this.Save();
  }

  Delete(abc: Todo) {
    if (this.items.length > 0) {
      this.items = this.items.filter(x => x.title != abc.title);
      this.Save();
    }
  }

  DeleteAll() {
    this.items = [];
    this.Save();
  }

  Update(abc: Todo) {
    if (this.items.length > 0) {
      this.items = this.items.filter(x => x.title != abc.title);
      if (abc != null && typeof abc != "undefined") {
        this.Add(abc);
        this.Save();
      }
    }
  }


  checkTitle(abc: string){
    if(this.items.find( x=>x.title == abc)){
      return true
    }
    return false;
  }

}
