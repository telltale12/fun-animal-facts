import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = (
  <img 
    className="background" 
    alt="ocean" 
    src="/images/ocean.jpg" 
  />
    );
    
const images = [];
    for (const animal in animals){
      images.push(
        <img 
          key={animal}
          className="animal" 
          src={animals[animal].image} 
          alt={animal} 
          aria-label={animal} 
          role="button" 
          onClick={displayFact}
        />
        )
    };  
    
const title = '';
const animalFacts = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    {background}
    <p id="fact"></p>
    <div className="animals">
      {images}
    </div>
    
  </div>
);
function displayFact(e) {
  //create a target event listener, this one on the alt text of the image via "target and info"
  const target = e.target.alt;
  const info = animals[target];
  //generate a random number
  const randomIndex = Math.floor(Math.random() * info.facts.length);
  //select a random fact from the animal object
  const fact = info.facts[randomIndex];
  //grab the 'fact' HTML element
  document.getElementById('fact').innerHTML = fact;
}

ReactDOM.render(animalFacts, document.getElementById('root'));