export function itemHasErrored(boolean) {
  return {
    type: "ITEM_HAS_ERRORED",
    hasErrored: boolean
  };
}

export function itemIsLoading(boolean) {
  return {
    type: "ITEM_IS_LOADING",
    isLoading: boolean
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemIsLoading(true));

    fetch(url).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemIsLoading(false));

      return response;
    })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemHasErrored(true)));
  };
}
