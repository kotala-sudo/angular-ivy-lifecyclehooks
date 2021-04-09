import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: number = 0;
  delete: boolean = false;

  onClick(dat: string){
    this.data = parseInt(dat);
  }

  onDelete(){
    this.delete = true;
  }

  
  ngOnDestroy(){
    console.log("this is ngDestroy")
  }
}
