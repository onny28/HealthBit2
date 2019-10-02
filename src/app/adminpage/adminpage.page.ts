import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {
 
  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  todos: Todo[];
 
  constructor(private todoService: TodoService) { }
 
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
  }

   //slides
   async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
