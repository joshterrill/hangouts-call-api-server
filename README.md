# hangouts-call-api-server

a Google hangouts REST API server that lets you pass parameters into the URL and it initiates a Hangouts session

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/joshterrill/hangouts-call-api-server)

Example server: [https://hangouts-call-api-server.herokuapp.com/](https://hangouts-call-api-server.herokuapp.com/)

## usage

Initiate Google Hangouts phone call
```
GET /call/4155550123
```

Initiate Google Hangouts phone call with language parameter ([list of supported languages](https://developers.google.com/+/hangouts/button#supported_languages))
```
GET /call/4155550123?language=fr
```

#### questions/comments

Josh Terrill: joshterrill.dev@gmail.com