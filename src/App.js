/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/




import React from 'react';

import Cars from './components/Cars';

import Food from './components/Food';

// To declare a css file you dont need to put from, see how css is declared below
import './App.css'


function App() {
let data = {
carsCollection: {
  luxuryCars:[
{
  id:1,
  name: 'Rolls Royce',
  url:'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg'
},
{
  id:2,
  name: 'Mercedes Benz',
  url:'https://images.hgmsites.net/hug/2021-mercedes-benz-cla-class_100771169_h.jpg'
},
{
  id:3,
  name: 'Bentley',
  url:'https://gtluxe.com/wp-content/uploads/2020/01/bentley-continental-gtc-alquiler-gtluxe-europe4.jpg'
},
  ],
    superCars:[
    {
      id:1,
      name: 'Lamborghini',
      url:'https://www.autoguide.com/blog/wp-content/uploads//2018/05/lamborghini-centenario.jpg'
    },
    {
      id:2,
      name: 'Bugatti',
      url:'https://cdn.luxe.digital/media/2020/06/09142447/bugatti-chiron-price-reviews-luxe-digital.jpg'
    },
    {
      id:3,
      name: 'Ferrari Laferrari',
      url:'https://i.gaw.to/content/photos/47/11/471188-ferrari-812-competizione-le-v12-atteint-son-apogee.jpeg'
    },
      ],
},

};

  return (
    <div>
      <h1>This is my home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem
        odit eaque adipisci excepturi facilis omnis. Repudiandae aliquam
        eligendi, placeat mollitia nulla quam reprehenderit, vel dolore vero
        vitae quidem et!
      </p>
      <Cars title='Cars' carData={data.carsCollection} />
      <Food />
    </div>
  );
};

export default App;
