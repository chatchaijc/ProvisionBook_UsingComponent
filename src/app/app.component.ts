import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UsingComponent';
  ParentCount = 0;

  addParentCount() {
    this.ParentCount = this.ParentCount + 1;
  }

  clearCount(value: number) {
    this.ParentCount = value;
  }
}
