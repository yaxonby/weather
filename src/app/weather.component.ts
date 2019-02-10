import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "./models";
import { Store } from "@ngrx/store";
import * as fromRoot from "./store/reducers";
import * as cityAction from "./store/actions/weathers";
import { DataService } from "./data.service";
import { MatInkBar } from "@angular/material";

@Component({
  selector: "app-weather",
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
      <li
        style="list-style-type:none"
        *ngFor="let city of (listCitys$ | async)"
      >
        <span>{{ city.name }}, &nbsp;</span>
        <span> &nbsp; {{ city.temperature }} °С, &nbsp;</span>
        <span> &nbsp; {{ city.description }}, &nbsp;</span>
        <span>ветер: &nbsp; {{ city.wind }}м/c, &nbsp;</span>
        <span>осадки: &nbsp; {{ city.precipitation }}мм</span>
        <span style="cursor:pointer" (click)="deleteLocated(city.id)"
          >&nbsp;&nbsp; x</span
        >
      </li>
    </ul>
  `,

  styleUrls: ["./weather.component.scss"],
  providers: [DataService]
})
export class WeatherComponent implements OnInit {
  listCitys$: Observable<Film[]>;
  selected$: Observable<Film>;
  listCity;
  counter;
  locationName: string;
  citys = {};

  constructor(
    private store: Store<fromRoot.State>,
    private dataService: DataService
  ) {
    this.listCitys$ = store.select(fromRoot.getCitys);
    this.selected$ = store.select(fromRoot.getSelectedCity);
    this.listCity = store.source._value.citys.citys;
    console.log("this.listCity=", this.listCity);
  }

  ngOnInit() {
    this.citys = this.dataService.getData();
    console.log("ngOnInit");
    this.counter = this.store.select(fromRoot.getAllCity);
  }

  onSelect(id: number) {
    this.store.dispatch(new cityAction.Select(id));
    console.log("citys$-", this.listCitys$);
  }
  /*
  addCity(locationName) {
    console.log(locationName);
    this.store.dispatch(new cityAction.AddOne(this.weather));
    this.locationName = "";
    console.log("store-", this.store.source);
    console.log("listCity=", this.listCity);

    console.log("counter=", this.counter);
  }
*/
  deleteLocated(id) {
    this.store.dispatch(new cityAction.DeleteOne(id));
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
        new cityAction.AddOne({
          ids: this.citys.weather.id,
          citys: {
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
