import React, { useState } from 'react';

import './App.scss';
import TeamForm from './components/TeamForm/TeamForm'
import TeamList from './components/TeamMembers/TeamList'

function App() {
  const [ teamMembers, setTeamMembers ] = useState(null)

  console.log(teamMembers)

  return (
    <div className="app-container">
      <header className="app-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      </header>
      <div className='app-body'>
        <TeamForm />
        {(teamMembers === null ? <h4>No Team Members Yet</h4> : <TeamList />)}
      </div>
    </div>
  );
}

export default App;
