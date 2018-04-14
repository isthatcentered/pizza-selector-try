import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormArray, FormGroup } from "@angular/forms"
import { ITopping } from "../pizza.service"




@Component( {
	selector:        "pizza-selected",
	template:        `
		                 <div class="pizza-selected">
			
			
			                 <!--// Selected toppings list-->
			                 <div class="pizza-selected__list"
			                      *ngIf="selected.length; else none;">
				
				                 <div *ngFor="let topping of selected; index as i;"
				                      class="pizza-selected__item">
					
					                 <div>
						                 <img src="assets/check.svg">
						
						                 <div style="padding-top:2px;">{{ topping }}</div>
						
						                 <button type="button"
						                         (click)="handleRemove(i)">
							
							                 <img src="assets/cross.svg">
						                 </button>
					                 </div>
				                 </div>
			                 </div>
		                 </div>
		                 
		                 <!--// No toppings selected-->
		                 <ng-template #none>
			                 <div class="pizza-selected__empty" *ngIf="!selected.length">
				                 Select toppings to create pizza
			                 </div>
		                 </ng-template>
	                 `,
	styles:          [
			`
			.pizza-selected {
				padding:       0 30px 30px;
				border-bottom: 1px solid #b8c8d0;
			}
			
			.pizza-selected__empty {
				font-style: italic;
			}
			
			.pizza-selected__list {
				border: 1px solid #b8c8d0;
			}
			
			.pizza-selected__item {
				border-bottom: 1px solid #b8c8d0;
				position:      relative;
				padding:       10px;
			}
			
			.pizza-selected__item > div {
				display:       flex;
				align-content: center;
			}
			
			.pizza-selected__item > div > img {
				width:  18px;
				margin: 0 8px 0 0;
			}
			
			.pizza-selected__item:last-child {
				border-bottom: 0;
			}
			
			.pizza-selected__item button {
				border-radius:   2px;
				display:         flex;
				justify-content: center;
				cursor:          pointer;
				outline:         0;
				border:          0;
				background:      #d73a49;
				width:           22px;
				height:          22px;
				position:        absolute;
				top:             11px;
				right:           10px;
			}
			
			.pizza-selected__item button img {
				width: 18px;
			}
		
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class PizzaSelectedComponent implements OnInit
{
	@Input()
	parent: FormGroup
	
	@Input()
	selected: Array<ITopping>
	
	@Output()
	remove = new EventEmitter<number>()
	
	
	get toppings(): FormArray
	{
		return this.parent.get( "toppings" ) as FormArray
	}
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
	
	handleRemove( ind: number )
	{
		this.remove.emit( ind )
	}
	
}
