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
    <p>
      <button (click)="geoFindMe()">Find weather my location</button>
    </p>
    <div id="out"></div>
    <span>Enter your location:</span>
    <input type="text" [(ngModel)]="locationName" />
    <button (click)="addLocated(locationName)">Find weather</button>
    <ul>
      <li style="list-style-type:none" *ngFor="let film of (films$ | async)">
        <span>{{ film.name }}, &nbsp;</span>
        <span> &nbsp; {{ film.temperature }} °С, &nbsp;</span>
        <span> &nbsp; {{ film.description }}, &nbsp;</span>
        <span>ветер: &nbsp; {{ film.wind }}м/c, &nbsp;</span>
        <span>осадки: &nbsp; {{ film.precipitation }}мм</span>
        <span style="cursor:pointer" (click)="deleteLocated(film.id)"
          >&nbsp;&nbsp; x</span
        >
      </li>
    </ul>
  `,

  styleUrls: ["./film.component.scss"],
  providers: [DataService]
})
export class FilmComponent implements OnInit {
  films$: Observable<Film[]>;
  selected$: Observable<Film>;
  listCity;
  counter;
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

  deleteLocated(id) {
    this.store.dispatch(new filmAction.DeleteOne(id));
  }

  addLocated(locationName = "Kiev", latitude, longitude) {
    console.log("latitude, longitude=", latitude, longitude);
    const keyApi = "&APPID=5baf5448a135ea4bda7e758af88b0136";
    const metric = "&units=metric";
    const lang = "&lang=ru";
    let url: string =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      locationName +
      metric +
      lang +
      keyApi;
    if (latitude) {
      console.log("пришли координаты", latitude, longitude);
      url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        metric +
        lang +
        keyApi;
    }
    console.log("url", url);
    const loadPromise = new Promise((resolve, reject) => {
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
            id: this.citys.weather.id,
            name: this.citys.weather.name,
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

  geoFindMe() {
    let latitude;
    let longitude;
    const self = this;
    const output = document.getElementById("out");

    if (!navigator.geolocation) {
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    function success(position) {
      latitude = position.coords.latitude.toFixed(2);
      longitude = position.coords.longitude.toFixed(2);

      output.innerHTML =
        "<p>Latitude: " + latitude + "°, Longitude: " + longitude + "°</p>";

      console.log("отправка latitude, longitude=", latitude, longitude);
      self.addLocated(undefined, latitude, longitude);
    }

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  }
}
