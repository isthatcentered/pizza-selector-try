import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pizza-selected',
  template: `
    <p>
      pizza-selected works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
