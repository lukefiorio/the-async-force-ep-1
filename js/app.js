'use strict';

// person #4
function innerXmlListener() {
  person4HomeWorld.innerHTML = JSON.parse(this.responseText).name;
}

function xmlListener() {
  person4Name.innerHTML = JSON.parse(this.responseText).name;

  const innerXmlReq = new XMLHttpRequest();
  innerXmlReq.addEventListener('load', innerXmlListener);
  innerXmlReq.open('GET', JSON.parse(this.responseText).homeworld);
  innerXmlReq.send();
}

const xmlReq = new XMLHttpRequest();
xmlReq.addEventListener('load', xmlListener);
xmlReq.open('GET', 'https://swapi.co/api/people/4/');
xmlReq.send();

// person #14
function innerXmlListener2() {
  person14Species.innerHTML = JSON.parse(this.responseText).name;
}

function xmlListener2() {
  person14Name.innerHTML = JSON.parse(this.responseText).name;

  const innerXmlReq2 = new XMLHttpRequest();
  innerXmlReq2.addEventListener('load', innerXmlListener2);
  innerXmlReq2.open('GET', JSON.parse(this.responseText).species);
  innerXmlReq2.send();
}

const xmlReq2 = new XMLHttpRequest();
xmlReq2.addEventListener('load', xmlListener2);
xmlReq2.open('GET', 'https://swapi.co/api/people/14/');
xmlReq2.send();

// all films
function xmlListener3() {
  let filmsArray = JSON.parse(this.responseText).results;

  for (let i = 0; i < filmsArray.length; i++) {
    let film = document.createElement('li');
    film.innerHTML = filmsArray[i].title;
    filmList.appendChild(film);
    let planetArray = filmsArray[i].planets;

    for (let j = 0; j < planetArray.length; j++) {
      function xmlPlanetListener() {
        //console.log(JSON.parse(this.responseText).name);
        let planet = document.createElement('ul');
        planet.innerHTML = JSON.parse(this.responseText).name;
        film.appendChild(planet);
      }

      let xmlPlanetReq = new XMLHttpRequest();
      xmlPlanetReq.addEventListener('load', xmlPlanetListener);
      xmlPlanetReq.open('GET', JSON.parse(this.responseText).results[i].planets[j]);
      xmlPlanetReq.send();
    }
  }
}

const xmlReq3 = new XMLHttpRequest();
xmlReq3.addEventListener('load', xmlListener3);
xmlReq3.open('GET', 'https://swapi.co/api/films/');
xmlReq3.send();
