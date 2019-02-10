import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { InputClearableExample } from "./my-input/input-clearable-example";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { WeatherComponent } from "./weather.component";
import { reducers, metaReducers } from "./store/reducers";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatCardModule
];
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    WeatherComponent,
    InputClearableExample
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
    MatFormFieldModule,
    MatInputModule,
    ...MATERIAL_MODULES,

    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
