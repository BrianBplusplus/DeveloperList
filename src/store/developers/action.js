import api from "../../api";

export function developersFetched(data) {
  return {
    type: "developers/FETCHED",
    payload: data
  };
}

export function fetchDevelopers(dispatch, getState) {
  api("/developers").then(data => {
    // note: just `dispatch` here now
    dispatch(developersFetched(data));
  });
}
