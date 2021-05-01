# Simple api to retrieve film data from FilmAffinity website
&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/rafagale/filmaffinity-rest-api/master/images/filmaffinity-api3.png" width="600px" alt="filmaffinity-logo" />
</p>

## Disclaimer
This unnofficial api is made exclusively to suit my needs

## Dependencies
- [ExpressJS](https://www.npmjs.com/package/express)
- [FAparser](https://www.npmjs.com/package/faparser)

## Installation

Clone this repository:
```
$ git clone https://github.com/rafagale/filmaffinity-rest-api
```

Navigate to the new `filmaffinity-rest-api` folder and install the node dependencies.
```
$ npm install
```

For it to work as it should you have to manually replace `requestfa.js` inside your `node_modules/faparser/` folder with the [this version](https://raw.githubusercontent.com/rafagale/filmaffinity-rest-api/master/node_modules/faparser/requestfa.js), sorry about that.

## Usage
Use the following command to run it or use any process manager like forever or pm2
```
$ node filmaffinity-api.js
```

Query by title: http://localhost:5000/api/title/el+padrino

```swift
{
   "id":"809297",
   "url":"https://www.filmaffinity.com/es/film809297.html",
   "country":{
      "imgCountry":"http://www.filmaffinity.com/imgs/countries2/US.png",
      "country":"Estados Unidos"
   },
   "year":"1972",
   "thumbnail":"https://pics.filmaffinity.com/the_godfather-488102675-mtiny.jpg",
   "title":"El padrino",
   "directors":[
      {
         "name":"Francis Ford Coppola",
         "request":{
            "query":"Francis Ford Coppola",
            "type":"DIRECTOR",
            "lang":"es"
         }
      }
   ],
   "cast":[
      {
         "name":"Marlon Brando",
         "request":{
            "query":"Marlon Brando",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Al Pacino",
         "request":{
            "query":"Al Pacino",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"James Caan",
         "request":{
            "query":"James Caan",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Robert Duvall",
         "request":{
            "query":"Robert Duvall",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Diane Keaton",
         "request":{
            "query":"Diane Keaton",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"John Cazale",
         "request":{
            "query":"John Cazale",
            "type":"CAST",
            "lang":"es"
         }
      }
   ],
   "rating":"9,0",
   "votes":"170.882"
}

```


Query by id: http://localhost:5000/api/id/999543

```swift
{
   "id":"999543",
   "url":"http://www.filmaffinity.com/es/film999543.html",
   "thumbnail":"https://pics.filmaffinity.com/navajeros-964056717-msmall.jpg",
   "year":"1980",
   "title":"Navajeros",
   "directors":[
      {
         "name":"Eloy de la Iglesia",
         "request":{
            "query":"Eloy de la Iglesia",
            "type":"DIRECTOR",
            "lang":"es"
         }
      }
   ],
   "cast":[
      {
         "name":"José Luis Manzano",
         "request":{
            "query":"José Luis Manzano",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"José Sacristán",
         "request":{
            "query":"José Sacristán",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Isela Vega",
         "request":{
            "query":"Isela Vega",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Verónica Castro",
         "request":{
            "query":"Verónica Castro",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Jaime Garza",
         "request":{
            "query":"Jaime Garza",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Enrique San Francisco",
         "request":{
            "query":"Enrique San Francisco",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"María Martín",
         "request":{
            "query":"María Martín",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"José Manuel Cervino",
         "request":{
            "query":"José Manuel Cervino",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"José Luis Fernández 'Pirri'",
         "request":{
            "query":"José Luis Fernández 'Pirri'",
            "type":"CAST",
            "lang":"es"
         }
      }
   ],
   "country":{
      "imgCountry":"http://www.filmaffinity.com/imgs/countries2/ES.png",
      "country":"España"
   },
   "rating":"6.3",
   "votes":"4184"
}

```
