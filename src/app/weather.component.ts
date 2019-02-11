import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { City } from "./models";
import { Store } from "@ngrx/store";
import * as fromRoot from "./store/reducers";
import * as cityAction from "./store/actions/weathers";
import { DataService } from "./data.service";
import { MatInkBar } from "@angular/material";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
  providers: [DataService]
})
export class WeatherComponent implements OnInit {
  listCitys$: Observable<City[]>;
  selected$: Observable<City>;
  listCity;
  locationName: string;
  citysNew;

  constructor(
    private store: Store<fromRoot.State>,
    private dataService: DataService
  ) {
    this.listCitys$ = store.select(fromRoot.getCitys);
    this.selected$ = store.select(fromRoot.getSelectedCity);
  }

  ngOnInit() {
    //  this.citys = this.dataService.getData();
    console.log("ngOnInit");
  }

  onSelect(id: number) {
    this.store.dispatch(new cityAction.Select(id));
    console.log("citys$-", this.listCitys$);
  }

  deleteLocated(id) {
    this.store.dispatch(new cityAction.DeleteOne(id));
  }

  addLocated(locationName = "Kiev", latitude, longitude) {
    const keyApi = "&APPID=5baf5448a135ea4bda7e758af88b0136";
    const metric = "&units=metric";
    const lang = "&lang=ru";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      locationName +
      metric +
      lang +
      keyApi;
    if (latitude) {
      url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        metric +
        lang +
        keyApi;
    }
    const loadPromise = new Promise((resolve, reject) => {
      // const myInit = {
      //   method: "GET",
      //   cache: "default"
      // };
      let dataWether;

      async function fetchAsync(url) {
        const dataJson = await fetch(url);
        //const dataJson = await fetch(url, myInit);
        return (dataWether = await dataJson.json());
      }
      fetchAsync(url).then(() => {
        console.log(dataWether);
        resolve({ located: locationName, weather: dataWether });
      });
    });
    loadPromise.then(result => {
      this.citysNew = result;
      console.log("this.citys--", this.citysNew);
      this.store.dispatch(
        new cityAction.AddOne({
          ids: this.citysNew.weather.id,
          citys: {
            id: this.citysNew.weather.id,
            name: this.citysNew.weather.name,
            description: this.citysNew.weather.weather[0].description,
            temperature: this.citysNew.weather.main.temp,
            wind: this.citysNew.weather.wind.speed,
            precipitation: this.citysNew.weather.clouds.all
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
