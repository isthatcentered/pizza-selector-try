import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core"




@Component( {
	selector:        "pizza-button",
	styles:          [
			`
			:host {
				display: block;
				padding: 30px;
			}
			
			.pizza-button button {
				cursor:      pointer;
				background:  #1094d2;
				color:       #fff;
				padding:     10px 15px;
				border:      0;
				outline:     0;
				font-size:   16px;
				display:     flex;
				align-items: center;
				transition:  all .2s ease-in-out;
			}
			
			.pizza-button button img {
				margin: 0 8px 0 0;
			}
			
			.pizza-button button:hover {
				background: #0f87bf;
			}
			
			.pizza-button button:disabled {
				opacity: .5;
				cursor:  not-allowed;
			}
			
			@media screen and (max-width: 550px) {
				.pizza-button button {
					width:           100%;
					justify-content: center;
				}
			}
		
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:        `
		                 <div class="pizza-button">
			                 <button type="submit"
			                         (click)="handleClick()"
			                         [disabled]="disabled">
				                 <img src="assets/add.svg">
				                 <ng-content></ng-content>
			                 </button>
		                 </div>
	                 `,
	
} )
export class PizzaButtonComponent implements OnInit
{
	
	@Input()
	disabled: boolean
	
	@Output()
	add = new EventEmitter<null>()
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
	
	handleClick()
	{
		this.add.emit()
	}
}
