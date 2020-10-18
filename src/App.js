import React from 'react';
import FootballTable from './FootballTable';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Football Table Predictor
      </header>
      <section className="football-tables">
        <FootballTable />
        <FootballTable />
      </section>

    </div>
  );
}

export default App;
