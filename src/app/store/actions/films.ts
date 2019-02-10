import { Action } from "@ngrx/store";
import { Film } from "../../models";

export const SELECT = "[Films] Select";
export const ADD_ONE = "[Films] Add One";
export const DELETE_ONE = "[Films] Delete One";

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

  constructor(public payload: Film) {}
}

export type Action = AddOne | DeleteOne;
//export type Action = AddOne | Select;
