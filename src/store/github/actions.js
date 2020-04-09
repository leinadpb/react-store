import { GET_GITHUB_REPOS, CLEAN_GITHUB_REPOS } from "./actionTypes";


export const getRepos = {
  method: 'GET',
  url: '/repos',
  actionType: GET_GITHUB_REPOS
}

export const cleanRepos = { type: CLEAN_GITHUB_REPOS, payload: [] }