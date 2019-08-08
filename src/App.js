import React from 'react';
import './App.css';
import JobInfoContainer from './containers/JobInfoContainer/JobInfoContainer'
import HeaderContainer from './containers/HeaderContainer/HeaderContainer' 

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <JobInfoContainer />
    </div>
  );
}

export default App;
