import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pizza-button',
  template: `
    <p>
      pizza-button works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
