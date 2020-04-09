import React from 'react';
import { Store } from './store/Store';
import { useHistory } from 'react-router';


const HelloComponent = () => {
  const { state } = React.useContext(Store);
  const history = useHistory(); 

  return (
    <div> 
      <b>{state.appTitle}</b>
      <br />
      { state.user.fullName }
      <br />
      {
        state.github.repositories ? state.github.repositories.map(repo => <div key={repo.id}><i>{repo.full_name}</i></div>) : undefined
      }
      <br />
      <button onClick={ () => history.push('/test') }>Got to test</button>
    </div>
  );
}

export default HelloComponent;