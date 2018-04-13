import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer= false;
	newServer = "No server was created";
	newText='';
	showText = false;
  serverStatus="offline";
  servers=["server 1 "]
  
	
	//definido como:
	//a method excecuter at the point this class is called by angular.
  constructor() {
  	//similat a una funcion en JS, unica diferencia es el uso de la palabra clave THIS
  //(argumentos o propiedades) => {funciona en donde se utilizan dichos argumentos o propiedades} 
  	setTimeout(() =>{
  		this.allowNewServer = true;
  	},	2000);

  
    
  }

  ngOnInit() {
  }

  onCreateNewServer(){
    this.serverStatus = Math.random() > 0.5 ? "online":"offline";
    this.servers.push(" new server!");
  	this.showText=true;
  	this.newServer="A new server was created!";
  }
  onUpdateServerName(event: Event){
  	this.newText = (<HTMLInputElement>event.target).value  
  }

  getServerStatus(){
    return this.serverStatus;
  }

  	resetText(){
  		this.newText='';
  	}
  	 emptyOrNot(){
  	 	if((this.newText=='')||(this.newText==null)){
  	 		return false;
  	 	}
  	 	else{
  	 		return true;
  		}
  		
  	}

getColor(){

 return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
  
