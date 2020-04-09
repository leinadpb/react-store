import React from 'react';
import { useHistory } from 'react-router';
import { Store } from './store/Store';
import { fetchData } from './store/commonActions';
import { getRepos, cleanRepos } from './store/github/actions';
import { changeUsername } from './store/user/actions';

const TestComponent = () => {
  const history = useHistory();
  const { dispatch } = React.useContext(Store);

  return (
    <div>
      <button onClick={() => fetchData(dispatch, getRepos)}>Fetch repositories --></button>
      <button onClick={() => dispatch( cleanRepos )} >Clean repos</button>
      <button onClick={() => { dispatch( changeUsername ) }} >Change user name to: Daniel</button>
      <br />
      <button onClick={ () => history.push("/") }>Go back</button>
    </div>
  )
}

export default TestComponent;