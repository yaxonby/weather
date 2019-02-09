import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "./models";
import { Store } from "@ngrx/store";
import * as fromRoot from "./store/reducers";
import * as filmAction from "./store/actions/films";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.scss"]
})
export class FilmComponent {
  films$: Observable<Film[]>;
  selected$: Observable<Film>;

  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
  }

  locationName: string;

  weather = {
    ids: 7,
    films: {
      11: {
        id: 10,
        name: "1111Interstellar",
        description: `11111Interstellar is a 2014 epic science fiction film directed, co-written,
       and co-produced by Christopher Nolan.`,
        img: "https://goo.gl/8mG12t",
        temperature: 11115,
        wind: 1111110,
        precipitation: 1111100
      }
    }
  };

  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }

  addCity(locationName) {
    console.log(locationName);
    this.store.dispatch(new filmAction.AddOne(this.weather));
    this.locationName = "";
  }
}
