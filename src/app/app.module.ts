import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
//import { InputClearableExample } from "./my-input/input-clearable-example";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";

//mport { counterReducer } from "./app.reducer";
//import { MyCounterComponent } from "./my-counter.component";
import { WeatherComponent } from "./weather.component";

import { FilmItemComponent } from "./components/film-item/film-item.component";
import { FilmListComponent } from "./components/film-list/film-list.component";
//import { reducers, metaReducers } from "./reducers";
import { reducers, metaReducers } from "./store/reducers";
import { FilmSelectedComponent } from "./components/film-selected/film-selected.component";

import { MatCardModule } from "@angular/material/card";

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatCardModule
];
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    //  MyCounterComponent,
    WeatherComponent,
    FilmItemComponent,
    FilmListComponent,
    FilmSelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ...MATERIAL_MODULES,

    StoreModule.forRoot(reducers, { metaReducers })
    //StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
