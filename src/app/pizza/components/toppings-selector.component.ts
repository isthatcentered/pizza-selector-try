import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toppings-selector',
  template: `
    <p>
      toppings-selector works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToppingsSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
