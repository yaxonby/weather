import { Action } from "@ngrx/store";
import * as cityAction from "../actions/weathers";
import { City } from "../../models";

export interface State {
  ids: number[];
  citys: [
    {
      id: number;
      name: string;
      description: string;
      temperature: number;
      wind: number;
      precipitation: number;
    }
  ];
  selected: number;
}

export const initialState: State = {
  ids: [1, 2, 3],
  citys: [
    {
      id: 1,
      name: "Minsk",
      description: `прохладно`,
      temperature: 5,
      wind: 3,
      precipitation: 20
    },
    {
      id: 2,
      name: "Moskva",
      description: "облачно",
      temperature: 3,
      wind: 5,
      precipitation: 30
    },
    {
      id: 3,
      name: "Kiev",
      description: "ветряно",

      temperature: 4,
      wind: 10,
      precipitation: 35
    }
  ],
  selected: null
};

export function reducer(state = initialState, action: cityAction.Action) {
  switch (action.type) {
    case cityAction.ADD_ONE: {
      const newCity = action.payload;
      const { ids, citys } = newCity;
      console.log("newFilm-", newCity);
      console.log("citys-", citys);
      console.log("state-", state);
      console.log("ctalo-", {
        ...state,
        ids: [...state.ids, ids],
        citys: [...state.citys, citys]
      });
      return {
        ...state,
        ids: [...state.ids, ids],
        citys: [...state.citys, citys]
      };
    }

    case cityAction.DELETE_ONE: {
      const id = action.payload;

      return {
        ...state,
        ids: [...state.ids].filter(function(item, i, arr) {
          return item.id !== id;
        }),
        citys: [...state.citys].filter(function(item, i, arr) {
          return item.id !== id;
        })
      };
    }

    case cityAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getCitys = (state: State) => state.citys;
export const getSelected = (state: State) => state.selected;
