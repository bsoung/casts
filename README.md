# Casts

Users can search through a large collection of podcasts powered by iTunes, create playlists, and discover new artists. Further iterations of the app will have OAuth and personal playlists. Also experiments with CSS animations and mobile-focused design to create a better user experience.

[Try it here!](https://casts-bs.herokuapp.com/)

Sometimes Heroku has a hiccup and it may affect this app. Check the their status if something is wrong by going here: https://status.heroku.com/

## Motivation

* Parsing XML to JSON with React components to receive podcast information. 
* Music player with integrated playlist and collapsable audio list.
* Users can search for thousands of podcasts with hundreds of collections. 

## Technologies

* React
* Redux
* Express
* iTunes
* Gulp
* Webpack / Babel

## API Reference

* GET /search/:term    :: makes a GET API request to itunes and returns a list of podcasts that match with the search term
* GET /feed/:feedUrl    :: returns a XML file converted to JSON for parsing 


## Develop

* Clone the repo.
* Run npm install, and then run webpack.
* Make sure Gulp is installed, then run gulp.
* Start nodemon, and switch over to localhost:3000.

### Contributers
* bsoung


