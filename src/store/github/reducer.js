import { GET_GITHUB_REPOS, CLEAN_GITHUB_REPOS } from "./actionTypes";

export const githubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA': 
      return { ...state, appTitle: action.payload };
    case GET_GITHUB_REPOS:
      return { ...state, repositories: action.payload };
    case CLEAN_GITHUB_REPOS:
      return { ...state, repositories: action.payload }
    default:
      return {...state};
  }
}