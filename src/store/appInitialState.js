import { githubInitialState } from './github/initialState';
import { UserInitialState } from './user/userInitialState';

const initialState = {
  github: githubInitialState,
  user: UserInitialState,
  appTitle: 'Default title'
}

export default initialState;