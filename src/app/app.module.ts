import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"


import { AppComponent } from "./app.component"
import { PizzaModule } from "./pizza/pizza.module"




@NgModule( {
	declarations: [
		AppComponent,
	],
	imports:      [
		BrowserModule,
		PizzaModule,
	
	],
	exports:      [],
	providers:    [],
	bootstrap:    [ AppComponent ],
} )
export class AppModule
{
}
