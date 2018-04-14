import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { PizzaService } from "../pizza.service"



// noinspection HtmlUnknownTarget
@Component( {
	selector: "pizza-creator",
	styles:   [
			`
			.pizza-creator {
				position:      relative;
				background:    #fff;
				box-shadow:    0 3px 4px rgba(0, 0, 0, 0.1);
				border:        1px solid #c1cedb;
				border-radius: 3px;
				overflow:      hidden;
			}
			
			.pizza-creator__title {
				background: #1094d2;
				color:      #fff;
				padding:    10px 15px;
			}
			
			.pizza-creator__title h1 {
				display:         flex;
				align-items:     center;
				justify-content: center;
				margin:          0;
				font-size:       24px;
				font-weight:     600;
				letter-spacing:  1px;
			}
			
			.pizza-creator__title h1 img {
				width:  40px;
				margin: 0 10px 0 0;
			}
			
			.pizza-creator__panes {
				display: flex;
			}
			
			@media screen and (max-width: 750px) {
				.pizza-creator__panes {
					display: block;
				}
			}
		
		`,
	],
	template: `
		          <div class="pizza-creator">
			          <div class="pizza-creator__title">
				          <h1>
					          <img src="assets/logo.svg">
					          Pizza Creator
				          </h1>
			          </div>
			          <div class="pizza-creator__panes">
				
				          <pizza-form
						          [toppings]="toppings$ | async"
						          (add)="addPizza($event)">
				          </pizza-form>
				
				          <pizza-list
						          [pizzas]="pizzas$ | async">
				          </pizza-list>
			          </div>
		          </div>
	          `,
} )
export class PizzaCreatorComponent implements OnInit
{
	toppings$: Observable<any> = this.__pizzaService.select( "toppings" )
	pizzas$: Observable<any> = this.__pizzaService.select( "pizzas" )
	
	
	constructor( private __pizzaService: PizzaService )
	{
	}
	
	
	ngOnInit()
	{
	}
	
	
	addPizza( $event )
	{
		this.__pizzaService.addPizza( $event )
	}
}
