import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core"




@Component( {
	selector:        "pizza-list",
	styles:          [
		`
			:host {
				display:    flex;
				flex:       1 0 40%;
				background: #0074ae;
			}
			
			.pizza-list {
				width:       100%;
				border-left: 1px solid #b8c8d0;
				padding:     30px;
			}
			
			.pizza-list h2 {
				margin:     -10px 0 20px;
				text-align: center;
				color:      #fff;
			}
			
			.pizza-list div {
				background:    #035e8c;
				border-radius: 3px;
				margin:        5px 0;
				padding:       10px;
				color:         #fff;
			}
			
			.pizza-list div p {
				margin:      0;
				font-size:   16px;
				font-weight: 600;
			}
			
			.pizza-list div span {
				font-size:  12px;
				font-style: italic;
			}
		
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:        `
		                 <div class="pizza-list">
			                 <h2>Store inventory</h2>
			                 <div *ngFor="let pizza of pizzas">
				                 <p>{{ pizza.name }}</p>
				               
	                                <span>{{ pizza.toppings | join }}</span>
			                 </div>
		                 </div>
	                 `,
	
} )
export class PizzaListComponent implements OnInit
{
	@Input()
	pizzas
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
}
