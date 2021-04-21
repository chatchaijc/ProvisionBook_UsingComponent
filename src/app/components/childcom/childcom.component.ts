import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css'],
})
export class ChildcomComponent implements OnInit {
  @Input('ChildCount') count = 0;
  @Output() onClearCount = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  clearCount() {
    this.onClearCount.emit(0);
  }
}
