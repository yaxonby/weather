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
      description: `cold`,
      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    {
      id: 2,
      name: "Moskva",
      description: "very cold",
      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    {
      id: 3,
      name: "Kiev",
      description: "windy",

      temperature: 5,
      wind: 10,
      precipitation: 100
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
