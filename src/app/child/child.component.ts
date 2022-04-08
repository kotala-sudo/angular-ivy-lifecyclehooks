import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
              <ng-content></ng-content>
            `
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() inputData: number;

  constructor() {
    console.log('this is constructor: ' + this.inputData);
  }

  ngOnInit() {
    console.log('this is ngOnInit: ' + this.inputData);
  }

  ngDoCheck() {
    console.log('this is ngDoCheck');
  }

  ngOnChanges() {
    console.log('this is ngOnChanges: ' + this.inputData);
  }

  ngOnDestroy() {
    console.log('this is ngDestroy');
  }

  ngAfterContentInit() {
    console.log('this is ngAfterContentInit which is called after ng-content projection');
  }

  ngAfterContentChecked() {
    console.log('this is ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('this is ngAfterViewInt called after the component has been full initialized');
  }

  ngAfterViewChecked(){
    console.log('this is ngAfterViewChecked');
  }
}
