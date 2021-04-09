import { 
  Component, 
  OnInit, 
  Input,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked
   } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges,OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked {

@Input() inputData: number;

  constructor() {
    console.log("this is constructor: " + this.inputData)
   }

  ngOnInit() {
    console.log("this is ngOnInit: " + this.inputData)
  }

  ngOnChanges(){
    console.log("this is ngOnChanges: " + this.inputData)
  }

  ngOnDestroy(){
    console.log("this is ngDestroy")
  }

  ngAfterContentInit(){
    console.log("After content projection");
  }

  ngAfterViewInit(){
    console.log("After view has been full initialized")
  }

  ngAfterContentChecked(){
    console.log("After Content Checked")
  }

}