import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
          <h3>Enter a number:</h3>
          <input type="text" #text />
          <button (click)="onClick(text.value)">Submit</button>
          <button (click)="onDelete()">Delete</button>
          <app-child *ngIf="!delete" [inputData]="data">
              <p>Data: {{data}}</p>
          </app-child>
            `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: number = 0;
  delete: boolean = false;

  onClick(dat: string) {
    this.data = parseInt(dat);
  }

  onDelete() {
    this.delete = true;
  }
}
