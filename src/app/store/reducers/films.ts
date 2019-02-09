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
  films: {
    1: {
      id: 1,
      name: "Interstellar",
      description: `Interstellar is a 2014 epic science fiction film directed, co-written,
       and co-produced by Christopher Nolan.`,
      img: "https://goo.gl/8mG12t",
      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    2: {
      id: 2,
      name: "Shutter Island",
      description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer,
       who escaped from a hospital for the criminally insane.`,
      img: "https://goo.gl/wfhjUF",
      temperature: 5,
      wind: 10,
      precipitation: 100
    },
    3: {
      id: 3,
      name: "The Grand Budapest Hotel",
      description: `The adventures of Gustave H, a legendary concierge at a famous hotel the lobby boy
       who becomes his most trusted friend.`,
      img: "https://goo.gl/mDBt45",
      temperature: 5,
      wind: 10,
      precipitation: 100
    }
  },
  selected: null
};

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
        films: { ...state.films, ...films }
      });
      return {
        ...state,
        ids: [...state.ids, ids],
        films: { ...state.films, films }
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
