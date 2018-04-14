import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PizzaCreatorComponent } from "./containers/pizza-creator.component"
import { PizzaFormComponent } from "./components/pizza-form.component"
import { PizzaNameComponent } from "./components/pizza-name.component"
import { PizzaSelectedComponent } from "./components/pizza-selected.component"
import { PizzaButtonComponent } from "./components/pizza-button.component"
import { PizzaListComponent } from "./components/pizza-list.component"
import { ToppingsSelectorComponent } from "./components/toppings-selector.component"
import { PizzaService } from "./pizza.service"
import { ReactiveFormsModule } from "@angular/forms";
import { JoinPipe } from './pipes/join.pipe'




@NgModule( {
	imports:      [
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [
		PizzaCreatorComponent,
		PizzaFormComponent,
		PizzaNameComponent,
		PizzaSelectedComponent,
		PizzaButtonComponent,
		PizzaListComponent,
		ToppingsSelectorComponent,
		JoinPipe,
	],
	exports:      [
		PizzaCreatorComponent,
	],
	providers:    [
		PizzaService,
	],
} )
export class PizzaModule
{
}
