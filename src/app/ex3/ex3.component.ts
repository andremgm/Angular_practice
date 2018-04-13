import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

	toogleStatus= false;
	array=[0];
	i=0;

  constructor() { }

  ngOnInit() {
  }


  onToogle(){
  	
	this.toogleStatus = !this.toogleStatus;

	this.array.push(this.array[this.i]+1);
	this.i++;
  }

}

