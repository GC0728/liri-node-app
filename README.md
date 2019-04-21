# liri-node-app

---A description of what the project is for---

liri-node-app is an application that allows its user to obtain information pertaining to movies, music events and songs. The user is able to use this application to gather information such as a movie's plot and cast, a song's artist and sample recording, or their favorite artist's touring schedule!

This application operates via the Command Line Interace and takes in a maximum of two arguments. The first argument determines which database that liri will query with the second argument. The second argument is user's search term(s). There are four possible first arguments and they are as follows:


1. `concert-this``
2. `do-what-it-says``
3. `movie-this``
4. `spotify-this-song``

Please be advised that screen shots of functioning examples of each argument can be found at (./assets/images).

---`concert-this``---
Entering `concert-this`` as your first argument allows liri to query bandsintown to obtain a music artist's current tour schedule. Information that will be displayed include the date and location of each individual event as well as the name of the venue that the show will be located.

---`movie-this``---
`movie-this`` allows the user to obtain a list of information about the film that they search. In addition to standard information, liri will return to the user information about the movie's critical responses, such as its Rotten Tomatoes and OMDB ratings.

---`spotify-this-song``
Using this command, a user is able to get the song's name, artist, album and a short preview of the song itself. 

---`do-what-it-says``---
The `do-what-it-says`` functionality allows the user to use a pre-made text file (.txt) in conjunction with the spotify-this-song command.

---Getting Started---

Node.js is required for this application to run. The relevant node_modules that running `npm install`` will download are as follows:

-bandsintown api
-spotify api
-omdb api

concert-this will query the bandsintownapi, spotify-this will query spotify's api, and movie-this will query omdb's api. 

Please note that spotify requires both a SPOTIFY_ID and a SPOTIFY_SECRET to function. 

---CONTACT INFORMATION---
More information about this application's developer can be found at https://github.com/GC0728
