require("dotenv").config();
 var keys = require("./keys.js");
 
 //Make app able to do following commands:
 concert-this
spotify-this-song
movie-this
do-what-it-says

var search = process.argv[2]


var tv = function()  {
 this.findShow = function(show) {
  var URL = http://api.tvmaze.com/singlesearch/shows?q=
      axios.get(url)
  .then(function (response) {
   console.log(response)
  })
  };
};
