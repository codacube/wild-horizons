# Scrimba NodeJS Course

Example server - Wild Horizons API. Query the server to get information on the Earth's most interesting places. Normally this would be connected to a database, but to keep things simple is uses a json file, pretending to be a db.

- Nodejs
- Javascript
- Path Params
- Query params
- So much quicker than a C based CGI!

## To run

```bash
npm i
npm start (or node server.js)
```

## Usage

In a browser (or curl/wget) use:

- http://localhost:8000/api
- http://localhost:8000/api/country/india
- http://localhost:8000/api?continent=Oceania
- http://localhost:8000/api?continent=Asia&country=Turkmenistan
- http://localhost:8000/api?continent=Asia&country=Turkmenistan&is_open_to_public=true
- http://localhost:8000/api?continent=Asia&is_open_to_public=false
