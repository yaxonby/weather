import { Action } from "@ngrx/store";
import { City } from "../../models";

export const SELECT = "[Citys] Select";
export const ADD_ONE = "[Citys] Add One";
export const DELETE_ONE = "[Citys] Delete One";

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export class DeleteOne implements Action {
  readonly type = DELETE_ONE;

  constructor(public payload: number) {}
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: City) {}
}

export type Action = AddOne | DeleteOne;
//export type Action = AddOne | Select;
