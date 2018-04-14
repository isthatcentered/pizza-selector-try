import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pizza-name',
  template: `
    <p>
      pizza-name works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
