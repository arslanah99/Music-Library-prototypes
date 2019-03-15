var library = {
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
  }
  //for keys in object
  // FUNCTIONS TO IMPLEMENT:
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  
  var printPlaylists = function () {
    for(var music in library.playlists){
        var musicInfo = library.playlists[music]
        console.log(musicInfo.name + ' - ' + musicInfo.tracks.length + ' tracks')
    }
}
// printPlaylists()

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  
  var printTracks = function () {
    //   var tracker = library.tracks.t01
    //   var code1 = tracker.name;
    //   var code2 = tracker.artist;
    //   var code3 = tracker.album;
    //   console.log(code1 + ' by ' + code2 + '(' + code3 + ')')
    for(var track in library.tracks){
        var trackInfo =library.tracks[track];

        console.log(trackInfo.name + ' by ' + trackInfo.name + '(' + trackInfo.album + ')')
    }
  }
  // printTracks()
  
  
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)


//   var library = {
//     tracks: { t01: { id: "t01",
//                      name: "Code Monkey",
//                      artist: "Jonathan Coulton",
//                      album: "Thing a Week Three" },
//               t02: { id: "t02",
//                      name: "Model View Controller",
//                      artist: "James Dempsey",
//                      album: "WWDC 2003"},
//               t03: { id: "t03",
//                      name: "Four Thirty-Three",
//                      artist: "John Cage",
//                      album: "Woodstock 1952"}
//             },
//     playlists: { p01: { id: "p01",
//                         name: "Coding Music",
//                         tracks: ["t01", "t02"]
//                       },
//                  p02: { id: "p02",
//                         name: "Other Playlist",
//                         tracks: ["t03", 'california love]
//                       }
//                }
//   }
  //playlist id, playlist name, number of tracks
  var printPlaylist = function (playlistId) {
    var playId = library.playlists[playlistId]
    var playListName = playId.name;
    var numOfTracks = playId.tracks.length

    console.log(playListName + ' - ' + numOfTracks + ' tracks')
    // var numOfTracks = playId
    for(var i of playId.tracks){
      //  var trackInfo = playId.tracks[i]
       var playTName = library.tracks[i].name;
       var playTArtist = library.tracks[i].artist;
       var playTAlbum = library.tracks[i].album;
        console.log(playTName + ' by ' + playTArtist + '(' + playTAlbum + ')')
    }
    // var playName = playId.name;
    // var numOfTracks = 
  }
  // printPlaylist('p01')

  // adds an existing track to an existing playlist
  
  var addTrackToPlaylist = function (trackId, playlistId) {
    var playNew = library.playlists[playlistId].tracks;
      playNew.push(trackId)
      // console.log('t01', 'p02')
      console.log(playNew)
    }
    addTrackToPlaylist('cali love', 'p01')
  
  
  
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  // adds a track to the library
  
  var addTrack = function (name, artist, album) {
    var uniqueId = uid()
    return library.tracks[uniqueId] = {
        id: uniqueId,
        name: name,
        artist: artist,
        album: album

    }

  }
  addTrack('BagBak', 'Vince Staples', 'Big Fish Theory')
  
  // console.log(library)
  // adds a playlist to the library
  
  var addPlaylist = function (name) {
    var playListRandom = uid()
    return library.playlists = {
    id: playListRandom,
    name: name,
    tracks: []
    // tracks: library.tracks[uniqueId] 
  }
  }
  addPlaylist('The play')
  
console.log(library)

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  var printSearchResults = function(query) {
  
  }