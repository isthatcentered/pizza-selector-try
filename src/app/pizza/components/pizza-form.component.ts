import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { IPizza, ITopping } from "../pizza.service"




@Component( {
	selector:        "pizza-form",
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles:          [
			`
			:host {
				display: flex;
				flex:    1 0 60%;
			}
			
			.pizza-form {
				width: 100%;
			}
		`,
	],
	template:        `
		                 <form [formGroup]="form">
			
			                 <!--// Available toppings display -->
			                 <toppings-selector [parent]="form"
			                                    [toppings]="toppings"
			                                    [selected]="selected"
			                                    (select)="handleToppingSelect($event)"
			                 ></toppings-selector>
			
			                 <!--// Pizza name input-->
			                 <pizza-name [parent]="form">
			                 </pizza-name>
			
			                 <!--// Selected toppings -->
			                 <pizza-selected [parent]="form"
			                                 [selected]="selected"
			                                 (remove)="handleToppingRemove($event)">
			                 </pizza-selected>
			
			                 <!--// Submit button -->
			                 <pizza-button (add)="handleAddPizza()"
			                               [disabled]="!form.valid">
				                 Add pizza
			                 </pizza-button>
		                 </form>
	                 `,
} )
export class PizzaFormComponent implements OnInit
{
	@Input()
	toppings: Array<ITopping>
	
	@Output()
	add = new EventEmitter<IPizza>()
	
	form: FormGroup = this.__fb.group( {
		name:     [ "", Validators.required ],
		toppings: this.__fb.array( [] ),
	} )
	
	
	get toppingsControl(): FormArray
	{
		return this.form.get( "toppings" ) as FormArray
	}
	
	
	get selected(): Array<ITopping>
	{
		return this.toppingsControl.value
	}
	
	
	constructor( private __fb: FormBuilder )
	{
	}
	
	
	ngOnInit()
	{
	}
	
	
	// Pizzas ======================================================
	handleAddPizza()
	{
		if ( !this.form.valid )
			return
		
		this.add.emit( this.form.value )
		this.form.patchValue( { name: "" } )
		this.handleResetToppings()
	}
	
	
	// Toppings =====================================================
	handleToppingSelect = ( $event: ITopping ) =>
		this.__toggleTopping( $event )
	
	handleToppingRemove = ( ind: number ) => {
		this.toppingsControl.removeAt( ind )
	}
	
	handleToppingAdd = ( topping: ITopping ) => {
		this.toppingsControl.push( new FormControl( topping ) )
	}
	
	handleResetToppings = () => {
		while ( this.toppingsControl.controls.length )
			this.toppingsControl.removeAt( 0 )
	}
	
	private __toggleTopping = ( t: ITopping ) => {
		
		const ind = this.toppingsControl.value.indexOf( t )
		
		if ( ind >= 0 )
			this.handleToppingRemove( ind )
		else
			this.handleToppingAdd( t )
	}
	
	
	
}
