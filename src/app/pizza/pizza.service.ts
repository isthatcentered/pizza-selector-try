import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs/BehaviorSubject"
import { Observable } from "rxjs/Observable"
import { distinctUntilChanged, pluck } from "rxjs/operators"




export type ITopping = String

export interface IPizza
{
	name: string
	toppings: Array<string>
}

export interface IState
{
	pizzas: IPizza[],
	toppings: ITopping[]
}

const state = {
	pizzas:   [
		{ name: "New Yorker", toppings: [ "Bacon", "Pepperoni", "Ham", "Mushrooms" ] },
	],
	toppings: [
		"Bacon", "Pepperoni", "Mushrooms", "Herbs",
		"Chicken", "Pineapple", "Ham", "Jalapenos",
	],
}

@Injectable()
export class PizzaService
{
	
	private __state$ = new BehaviorSubject<IState>( state )
	
	store$: Observable<IState> = this.__state$
		.asObservable()
		.pipe( distinctUntilChanged() )
	
	
	get value()
	{
		return this.__state$.value
	}
	
	
	constructor()
	{
	}
	
	
	select<T>( slice: string ): Observable<T>
	{
		return this.store$
			.pipe( pluck( slice ) )
	}
	
	
	addPizza( pizza: IPizza )
	{
		this.__state$.next( {
				...this.value,
				pizzas:
					[
						...this.value.pizzas,
						pizza,
					],
			},
		)
	}
}
