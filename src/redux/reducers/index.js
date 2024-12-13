import { GET_MUSIC, REMOVE_FROM_FAVOURITE, ADD_TO_FAVOURITE, ADD_TO_PLAYER } from "../actions";

const initialState = {
  favourite: {
    list: [],
  },
  rock: [],
  pop: [],
  hiphop: [],
  search: [],
  player: {},
};

const musicReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };

    case ADD_TO_PLAYER:
      return {
        ...state,
        player: action.payload,
      };

    case GET_MUSIC:
      return {
        ...state,
        [action.payload.category]: action.payload.data,
      };
    default:
      return state;
  }
};

export default musicReducers;
