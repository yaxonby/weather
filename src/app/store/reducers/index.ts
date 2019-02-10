import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";

import * as fromCitys from "./weathers";

export interface State {
  citys: fromCitys.State;
}

export const reducers: ActionReducerMap<State> = {
  citys: fromCitys.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log("state", state);
    console.log("action", action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getCityState = createFeatureSelector<fromCitys.State>("citys");

export const getIds = createSelector(
  getCityState,
  fromCitys.getIds
);

export const getCitys = createSelector(
  getCityState,
  fromCitys.getCitys
);

export const getSelected = createSelector(
  getCityState,
  fromCitys.getSelected
);

export const getSelectedCity = createSelector(
  getSelected,
  getCitys,
  (selectedId, citys) => {
    return {
      ...citys[selectedId]
    };
  }
);

export const getAllCity = createSelector(getCitys);
