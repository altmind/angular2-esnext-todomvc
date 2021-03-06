import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoStoreService } from './services/todo-store.service';
import {
  AppComponent,
  TodoListComponent,
  TodoFooterComponent,
  TodoHeaderComponent,
  TodoItemComponent
} from './components';
import { TrimPipe } from './pipes';
import { routes } from './components/todo.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    TodoStoreService,
    { provide: 'AUTHOR', useValue: 'Soós Gábor' }
  ]
})
export class MainModule {}
