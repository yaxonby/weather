import { Component } from "@angular/core";

/**
 * @title Input with a clear button
 */
@Component({
  selector: "input-clearable-example",
  template: `
    <mat-form-field class="example-form-field">
      <input
        matInput
        type="text"
        placeholder="Clearable input"
        [(ngModel)]="value"
      />
      <button
        mat-button
        *ngIf="value"
        matSuffix
        mat-icon-button
        aria-label="Clear"
        (click)="value = ''"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `
  // styleUrls: ['./input-clearable-example.css'],
})
export class InputClearableExample {
  value = "Clear me";
}
