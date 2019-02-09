import { Component, OnInit, Input } from "@angular/core";
import { Film } from "../../models";

@Component({
  selector: "app-film-selected",
  template: `
    <mat-card *ngIf="film && film.name">
      <mat-card-header>
        <mat-card-title>{{ film.name }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>description:{{ film.description }}</p>
        <p>temperature:{{ film.temperature }}</p>
        <p>wind:{{ film.wind }}</p>
        <p>precipitation:{{ film.precipitation }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      mat-card {
        margin-top: 14px;
        width: 700px;
      }
    `
  ]
})
export class FilmSelectedComponent implements OnInit {
  @Input() film: Film;
  constructor() {}

  ngOnInit() {}
}
