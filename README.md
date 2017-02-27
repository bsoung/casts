# Casts

Users can search through a large collection of podcasts powered by iTunes, create playlists, and discover new artists. Further iterations of the app will have OAuth and personal playlists.

[Try it here!](https://casts-bs.herokuapp.com/)

## Motivation

* Parsing XML to JSON with React components to receive podcast information. 
* Music player with integrated playlist with a collapsable list of music files.
* Users can search for thousands of podcasts with hundreds of collections. 

## Technologies

* React
* Redux
* Express
* iTunes
* Gulp
* Webpack / Babel

## API Reference

* GET /search/:term    :: makes an API to itunes and returns a podcasts that match with term
* GET /feed/:feedUrl    :: returns an XML file converted to JSON for processing


## Develop

* Clone the repo.
* Run npm install, and then run webpack.
* Make sure Gulp is installed, then run gulp.
* Start nodemon, and switch over to localhost:3000.

### Contributers
* bsoung


