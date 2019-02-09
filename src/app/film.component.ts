import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "./models";
import { Store } from "@ngrx/store";
import * as fromRoot from "./store/reducers";
import * as filmAction from "./store/actions/films";
import { DataService } from "./data.service";
import { MatInkBar } from "@angular/material";

@Component({
  selector: "app-film",
  //templateUrl: "./film.component.html",

  template: `
    <p>Enter your location</p>
    <ul>
      <li *ngFor="let film of (films$ | async)">
        <div>{{ film.name }}</div>
        <div>{{ film.temperature }}</div>
      </li>
        <span>Enter your location:</span>
    <input type="text" [(ngModel)]="locationName" />
    <button (click)="addLocated(locationName)">Find weather</button>
  `,

  styleUrls: ["./film.component.scss"],
  providers: [DataService]
})
export class FilmComponent implements OnInit {
  films$: Observable<Film[]>;
  selected$: Observable<Film>;
  listCity;
  counter;
  idNumber: number = 3;

  locationName: string;
  citys = {};

  constructor(
    private store: Store<fromRoot.State>,
    private dataService: DataService
  ) {
    //this.films$ = store.select(fromRoot.getAllFilms);
    this.films$ = store.select(fromRoot.getFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
    this.listCity = store.source._value.films.films;
    console.log("this.listCity=", this.listCity);
  }

  ngOnInit() {
    this.citys = this.dataService.getData();
    console.log("ngOnInit");
    this.counter = this.store.select(fromRoot.getAllFilms);
  }

  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
    console.log("films$-", this.films$);
  }

  addCity(locationName) {
    console.log(locationName);
    this.store.dispatch(new filmAction.AddOne(this.weather));
    this.locationName = "";
    console.log("store-", this.store.source);
    console.log("listCity=", this.listCity);

    console.log("counter=", this.counter);
  }

  addLocated(locationName = "Moskva") {
    console.log(locationName);
    const loadPromise = new Promise((resolve, reject) => {
      const keyApi = "&APPID=5baf5448a135ea4bda7e758af88b0136";
      let url: string =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        locationName +
        keyApi;

      const myInit = {
        method: "GET",
        cache: "default"
      };
      let dataWether;

      async function fetchAsync(url) {
        const dataJson = await fetch(url, myInit);
        return (dataWether = await dataJson.json());
      }
      fetchAsync(url).then(() => {
        console.log(dataWether);
        resolve({ located: locationName, weather: dataWether });
      });
    });
    loadPromise.then(result => {
      this.citys = result;
      console.log("this.citys--", this.citys);
      this.store.dispatch(
        new filmAction.AddOne({
          ids: this.citys.weather.id,
          films: {
            id: this.idNumber,
            name: this.citys.located,
            description: this.citys.weather.weather[0].description,
            temperature: this.citys.weather.main.temp,
            wind: this.citys.weather.wind.speed,
            precipitation: this.citys.weather.clouds.all
          }
        })
      );
      this.locationName = "";
    });
  }
}
