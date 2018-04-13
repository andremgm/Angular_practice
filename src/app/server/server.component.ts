import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  
})

export class ServerComponent{
	serverNumber= 1;
	text="server number:"	

	getServerNumber(){
		
		return  this.text+this.serverNumber++;
	}
}