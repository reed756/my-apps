import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    class: 'app-root',
  }
})
export class AppComponent {
  title = 'todo-app';
}
