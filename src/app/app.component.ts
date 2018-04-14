import { Component } from "@angular/core"




@Component( {
	selector: "app-root",
	styles:   [
			`
			:host {
				display:         flex;
				margin:          25px 0;
				justify-content: center;
				width:           100%;
			}
			
			@media screen and (max-width: 600px) {
				:host {
					margin: 10px 0;
				}
			}
			
			.app {
				max-width: 96%;
			}
		
		`,
	],
	template: `
		          <pizza-creator></pizza-creator>
	          `,
} )
export class AppComponent
{
	title = "app"
}
