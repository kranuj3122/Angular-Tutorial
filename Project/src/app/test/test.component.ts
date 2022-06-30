import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();
  public fireEvent() {
    this.childEvent.emit('hey Anuj kumar');
  }
  constructor() {}

  ngOnInit(): void {}
}
