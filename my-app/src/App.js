import React from 'react';
import Header from './components/Header';
import EarthQuakeList from './components/EarthQuakeList';
import './App.css'

function App() {
  return (
    <div className="App bg-blue-200 p-10 flex flex-col items-center">
      <Header />
      <EarthQuakeList />
    </div>
  );
}

export default App;