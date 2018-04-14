import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { ITopping } from "../pizza.service"
import { FormGroup } from "@angular/forms"




@Component( {
	selector:        "toppings-selector",
	styles:          [
			`
			.toppings-selector {
				padding:         30px;
				display:         flex;
				justify-content: space-between;
				flex-wrap:       wrap;
				border-bottom:   1px solid #b8c8d0;
			}
			
			.toppings-selector__item {
				cursor:         pointer;
				background:     #97c747;
				color:          #fff;
				padding:        6px;
				text-align:     center;
				font-weight:    500;
				border-radius:  3px;
				margin:         2px 0;
				flex:           0 0 23%;
				text-transform: uppercase;
				font-size:      12px;
				transition:     all .2s ease-in-out;
			}
			
			.toppings-selector__item:hover, .toppings-selector__item.active {
				background: #68961b;
			}
			
			@media screen and (max-width: 550px) {
				.toppings-selector__item {
					flex:    0 0 49%;
					padding: 10px 0;
				}
			}
			
			.error {
				width:         100%;
				border-radius: 2px;
				background:    #d73a49;
				color:         #fff;
				padding:       5px 10px;
				font-size:     13px;
				margin:        0;
				position:      relative;
				font-weight:   500;
			}
		
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:        `
		                 <div class="toppings-selector" [formGroup]="parent">
			
			                 <!--// Toppings list -->
			                 <div class="toppings-selector__item"
			                      *ngFor="let topping of toppings"
			                      [class.active]="isActive(topping)"
			                      (click)="onSelect(topping)">
				                 {{ topping }}
			                 </div>
			
			                 <!--// Error display -->
			                 <div class="error"
			                      *ngIf="invalid">
				                 Select at least 1 topping
			                 </div>
		                 </div>
	                 `,
	
} )
export class ToppingsSelectorComponent implements OnInit
{
	@Input()
	toppings: Array<ITopping>
	
	@Input()
	selected: Array<ITopping>
	
	@Input()
	parent: FormGroup
	
	@Output()
	select = new EventEmitter<ITopping>()
	
	touched: boolean = false
	
	
	get invalid()
	{
		return this.touched &&
			this.parent.hasError( "noToppings" )
	}
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
	
	exists = ( topping: ITopping ): boolean =>
		this.selected.indexOf( topping ) >= 0
	
	
	isActive = ( topping: ITopping ): boolean =>
		this.exists( topping )
	
	
	onSelect = ( topping: ITopping ) => {
		this.touched = true
		this.select.emit( topping )
	}
}
