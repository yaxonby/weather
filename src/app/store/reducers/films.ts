import { Action } from "@ngrx/store";
import * as filmAction from "../actions/films";

import { Film } from "../../models";

export interface State {
  ids: number[];
  films: { [id: number]: Film };
  selected: number;
}

export const initialState: State = {
  ids: [1, 2, 3],
  films: [
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
/*
export const initialState: State = {
  ids: [1, 2, 3],
  films: {
    1: {
      id: 1,
      name: "Minsk",
      description: `cold`,

      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    2: {
      id: 2,
      name: "Moskva",
      description: "very cold",
      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    3: {
      id: 3,
      name: "Kiev",
      description: "windy",

      temperature: 5,
      wind: 10,
      precipitation: 100
    }
  },
  selected: null
};
*/

export function reducer(state = initialState, action: filmAction.Action) {
  switch (action.type) {
    case filmAction.ADD_ONE: {
      //const newFilm: Film = action.payload;
      const newFilm = action.payload;
      const { ids, films } = newFilm;
      console.log("newFilm-", newFilm);
      console.log("films-", films);
      console.log("state-", state);
      console.log("ctalo-", {
        ...state,
        ids: [...state.ids, ids],
        films: [...state.films, films]
      });
      return {
        ...state,
        ids: [...state.ids, ids],
        films: [...state.films, films]
      };
    }

    case filmAction.DELETE_ONE: {
      const id = action.payload;

      return {
        ...state,
        ids: [...state.ids].filter(function(item, i, arr) {
          return item.id !== id;
        }),
        films: [...state.films].filter(function(item, i, arr) {
          return item.id !== id;
        })
      };
    }

    case filmAction.SELECT: {
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
export const getFilms = (state: State) => state.films;
export const getSelected = (state: State) => state.selected;
