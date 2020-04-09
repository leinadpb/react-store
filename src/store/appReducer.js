import { githubReducer } from './github/reducer';
import { userReducer } from './user/userReducer';

const AppReducer = (state, action) => {

  const { github, user } = state;

  return {
    ...state,
    github: githubReducer(github, action),
    user: userReducer(user, action),
  }
}

export default AppReducer;