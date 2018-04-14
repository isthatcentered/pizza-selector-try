import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaCreatorComponent } from './containers/pizza-creator.component';
import { PizzaFormComponent } from './components/pizza-form.component';
import { PizzaNameComponent } from './components/pizza-name.component';
import { PizzaSelectedComponent } from './components/pizza-selected.component';
import { PizzaButtonComponent } from './components/pizza-button.component';
import { PizzaListComponent } from './components/pizza-list.component';
import { ToppingsSelectorComponent } from './components/toppings-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PizzaCreatorComponent, PizzaFormComponent, PizzaNameComponent, PizzaSelectedComponent, PizzaButtonComponent, PizzaListComponent, ToppingsSelectorComponent]
})
export class PizzaModule { }
