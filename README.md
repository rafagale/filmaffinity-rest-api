# Unofficial FilmAffinity REST API
## Simple api to retrieve film data from FilmAffinity website
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

## Usage
Use the following command to run it or use any process manager like forever or pm2
```
$ node filmaffinity-api.js
```

|Method name|API endpoint|HTTP method|Input|Output|
|-----------|------------|-----------|-----|------|
|Get film by title|/api/title/{title}|GET|film title|see below|
|Get film by id |/api/id/{id}|GET|film id|see below|


### Query by title
```
http://localhost:5000/api/title/el+padrino
```

OUTPUT

```json
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

### Query by id
```
http://localhost:5000/api/id/999543
```


OUTPUT

```json
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
         "name":"Jos?? Luis Manzano",
         "request":{
            "query":"Jos?? Luis Manzano",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Jos?? Sacrist??n",
         "request":{
            "query":"Jos?? Sacrist??n",
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
         "name":"Ver??nica Castro",
         "request":{
            "query":"Ver??nica Castro",
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
         "name":"Mar??a Mart??n",
         "request":{
            "query":"Mar??a Mart??n",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Jos?? Manuel Cervino",
         "request":{
            "query":"Jos?? Manuel Cervino",
            "type":"CAST",
            "lang":"es"
         }
      },
      {
         "name":"Jos?? Luis Fern??ndez 'Pirri'",
         "request":{
            "query":"Jos?? Luis Fern??ndez 'Pirri'",
            "type":"CAST",
            "lang":"es"
         }
      }
   ],
   "country":{
      "imgCountry":"http://www.filmaffinity.com/imgs/countries2/ES.png",
      "country":"Espa??a"
   },
   "rating":"6.3",
   "votes":"4184"
}

```
