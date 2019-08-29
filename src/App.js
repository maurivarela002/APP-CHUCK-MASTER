import React from 'react';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='row'>
          <Card nombre='Tiziana Tironi'and rol='Alumno de ÁNIMA' and fotoURL='https://i.imgur.com/TQuwnw0.png'></Card>
          <Card nombre='Mauricio Varela'and rol='Alumno de ÁNIMA' and fotoURL='https://i.imgur.com/uLnDawB.png'></Card>
          <Card nombre='Diego Barreto' and rol='Alumno de ÁNIMA' and fotoURL='https://i.imgur.com/WfRb7Ts.png'></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
