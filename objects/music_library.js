const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  let str = "";

  let playlistOnly = library.playlists;

  for (const key in playlistOnly) {
    str += playlistOnly[key].id + ": " + playlistOnly[key].name + " - " + playlistOnly[key].tracks.length + " tracks\n";
  }
  return str;
}

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks;

  let str = "";

  for(const track in tracks) {
    str += tracks[track].id + ": " + tracks[track].name + " by " + tracks[track].artist + " (" + tracks[track].album + ")\n";
  }
  return str;
}

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let str = "";
  const playlist = library.playlists;
  for(const key in playlist)
  {
    if(key === playlistId){
     str += playlistId + ": " + playlist[key].name + " - " + playlist[key].tracks.length
    }
  }
  return str;
}
console.log(printPlaylist("p01"));


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlists = library.playlists;
  
  if (!playlists[playlistId]) {
    return "Playlist does not exist.";
  }

  for(const key in playlists)
  {
    if(playlistId === key)
    {
      playlists[key].tracks.push(trackId);
      console.log(playlists[key]);
    }
  }
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const tracks = library.tracks;
  const uniqueId = generateUid();

  tracks[uniqueId] = {id: uniqueId, name: name, artist: artist, album: album}

};



// adds a playlist to the library
const addPlaylist = function(name) 
{
  const playlist = library.playlists;

  const uniqueId = uniqueId();

  playlist[uniqueId] = {id: uniqueId, name: name};

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}