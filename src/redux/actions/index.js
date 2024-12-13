export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MUSIC = "GET_MUSIC";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const addToFavouriteAction = (song) => ({
  type: ADD_TO_FAVOURITE,
  payload: song,
});

export const removeFromFavouriteAction = (song) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: song,
});

export const addToPlayer = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song,
});

export const getMusicsAction = (query, category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        let { data } = await response.json();
        data = data.slice(0, 4);
        dispatch({
          type: GET_MUSIC,
          payload: { data: data, category: category },
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
