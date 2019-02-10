import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

@Component({
  selector: "app-root",
  //  templateUrl: "./app.component.html",
  template: `
    <div style="text-align:center">
      <app-my-nav></app-my-nav>
      <h1>
        Weather!
      </h1>
      <app-film></app-film>
    </div>
  `,
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  locationName: string;
  items = {};

  constructor(private dataService: DataService) {}

  addLocated(locationName) {
    console.log(locationName);
    this.dataService.loadData(locationName);
    this.locationName = "";
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
