// REQUIRES
require("dotenv").config();
var keys = require("./keys.js");
var omdbKey = keys.omdb.id;
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
// GLOBALS
var searchPrompt = process.argv;
var artistSearch = searchPrompt.slice(3).join("");
var movieSearch = searchPrompt.slice(3).join("+");
var spotifySearch = searchPrompt.slice(3).join("+");
/* fs.readFile("random.txt", "utf-8", (err, data) => {
    if (err) throw err;
}); */
//-------------------- WORK IN PROGRESS-------------------------------------------
// DO-WHAT-IT-SAYS ARGUMENT
if (searchPrompt[2] === "do-what-it-says") {
    fs.readFile("random.txt", "utf-8", (err, data) => {
        if (err) throw err;
        var doSpoty = data.split('"')
        var doSpotySearch = doSpoty[1];
    spotify
    .search({type: "track", query: doSpotySearch})
    .then(function(songResponse) {
     //   console.log(songResponse);
        var artistName = songResponse.tracks.items[0].album.artists[0].name;
        var songName = songResponse.tracks.items[0].name;
        var albumName = songResponse.tracks.items[0].album.name;
        var previewThis = songResponse.tracks.items[0].preview_url;
        console.log(`
        Name: ${artistName}
        Song: ${songName}
        Album: ${albumName}
        Preview: ${previewThis}
        `)
    });
});
};
//-----------------------COMPLETED-------------------------------
// SPOTIFY API LINK
console.log("-------");
if (searchPrompt[2] === "spotify-this-song") {
    spotify
        .search({type: "track", query: spotifySearch})
        .then(function(songResponse) {
        //    console.log(songResponse);
            var artistName = songResponse.tracks.items[0].album.artists[0].name;
            var songName = songResponse.tracks.items[0].name;
            var albumName = songResponse.tracks.items[0].album.name;
            var previewThis = songResponse.tracks.items[0].preview_url;
            console.log(`
            Name: ${artistName}
            Song: ${songName}
            Album: ${albumName}
            Preview: ${previewThis}
            `)
    })
}; 
//  BANDS IN TOWN API
 if (searchPrompt[2] === "concert-this") {
    axios
        .get(`https://rest.bandsintown.com/artists/${artistSearch}/events?app_id=codingbootcamp`)
        .then(function(bandsResponse) {
          var artistResults = bandsResponse.data;
            for (var i = 0; i < artistResults.length; i++) {
              var time =  artistResults[i].datetime;
              var convertedTime = moment(time).format("L");
               console.log(`
               Venue: ${artistResults[i].venue.name}
               Location: ${artistResults[i].venue.city}, ${artistResults[i].venue.region}
               Time: ${convertedTime}
               `); 
                console.log("------");
                }
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.data.status);
                console.log(error.response.data.header);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message)
            }
            console.log(error.config)
        }); 
 }; 
 // OMDB API
 if (searchPrompt[2] === "movie-this" && searchPrompt[3] === undefined) {
        axios
        .get(`http://www.omdbapi.com/?apikey=${omdbKey}&t=Mr.+Nobody`)
        .then(function(nobodyResponse) {
            var mrNobody = nobodyResponse.data;
            console.log(`
            Title: ${mrNobody.Title}
            Release: ${mrNobody.Year}
            IMDB Score: ${mrNobody.Ratings[0].Value}
            Rotten Rating: ${mrNobody.Ratings[0].Value}
            Country of Origin: ${mrNobody.Country}
            Language: ${mrNobody.Language}
            Plot: ${mrNobody.Plot}
            Actors: ${mrNobody.Actors}
            `);
        }); 
    } else if (searchPrompt[2] === "movie-this") 
        axios
            .get(`http://www.omdbapi.com/?apikey=${omdbKey}&t=${movieSearch}`)
            .then(function(movieResponse) {
              var movieResults = movieResponse.data;
         //     console.log(movieResults);
                  console.log(`
                  Title: ${movieResults.Title}
                  Release: ${movieResults.Year}
                  IMDB Score: ${movieResults.Ratings[0].Value}
                  Rotten Rating: ${movieResults.Ratings[1].Value}
                  Country of Origin: ${movieResults.Country}
                  Language: ${movieResults.Language}
                  Plot: ${movieResults.Plot}
                  Actors: ${movieResults.Actors}
                  `); 
            })
            .catch(function(error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.data.status);
                    console.log(error.response.data.header);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message)
                }
                console.log(error.config)
            }); 

//---------------------------------------------------------------
