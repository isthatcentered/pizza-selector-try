import { Pipe, PipeTransform } from "@angular/core"




@Pipe( {
	name: "join",
} )
export class JoinPipe implements PipeTransform
{
	
	transform( value: Array<any>, args?: any ): any
	{
		return value.join( ", " )
	}
	
}
