import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"




@Component( {
	selector:        "pizza-name",
	styles:          [
			`
			.pizza-name {
				padding: 30px;
			}
			
			.pizza-name input {
				width:         100%;
				border:        1px solid #b8c8d0;
				padding:       10px 15px;
				border-radius: 2px;
				font-size:     14px;
				color:         #01699a;
				outline:       0;
			}
			
			.error {
				border-radius: 0 0 2px 2px;
				background:    #d73a49;
				color:         #fff;
				padding:       5px 10px;
				font-size:     13px;
				margin:        -1px 0 0;
				position:      relative;
				font-weight:   500;
			}
		
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:        `
		                 <div class="pizza-name" [formGroup]="parent">
			                 <input
					                 type="text"
					                 placeholder="Pizza name, e.g. Blazin' hot"
					                 formControlName="name">
			
			                 <div class="error"
			                      style="margin-top: 1rem;"
			                      *ngIf="invalid">
				                 Pizza name is required
			                 </div>
		                 </div>
	                 `,
	
} )
export class PizzaNameComponent implements OnInit
{
	@Input()
	parent: FormGroup
	
	
	get invalid(): boolean
	{
		return this.parent.get( "name" ).dirty &&
			this.parent.get( "name" ).hasError( "required" )
		
	}
	
	
	constructor()
	{
	}
	
	
	ngOnInit()
	{
	}
	
}
