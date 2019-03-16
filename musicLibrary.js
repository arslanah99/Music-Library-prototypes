const Library = function(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylistToLibrary = function(someGenericPlaylist){
    (this.playlists).push(someGenericPlaylist)
}

const Track = function(title, rating, lengthSeconds){
    this.title = "track:" + title;
    this.rating = rating;
    this.lengthSeconds = lengthSeconds;
}

const Playlist = function(name){
    this.name = name;
    this.trackSpot = [];
}

Playlist.prototype.addTracktoTrackSpot = function(track){
    (this.trackSpot).push(track)
}

Playlist.prototype.overallRating = function(){
    if(!this.trackSpot.length) return 0;
    let sumOfRatings = 0;
    for(var i = 0; i < this.trackSpot.length; i++){
        const currTrack = this.trackSpot[i];
        sumOfRatings += currTrack.rating;
    }
    return (sumOfRatings / this.trackSpot.length)
}

Playlist.prototype.totalDuration = function(){
    let durations = 0;
    for(var i = 0; i < this.trackSpot.length; i++){
        durations += this.trackSpot[i].lengthSeconds;
    }
    return durations
}

var darrenLibrary = new Library('Darrens library', 'Arslan')
var darrenPlaylist = new Playlist('jams');
var song1 = new Track('Black Parade', 4, 230);
var song2 = new Track('Smack That', 5, 220);
var song3 = new Track('Bye Bye Bye', 5, 320);

darrenPlaylist.addTracktoTrackSpot(song1)
darrenPlaylist.addTracktoTrackSpot(song2)
darrenPlaylist.addTracktoTrackSpot(song3)

console.log("Total duration is:", darrenPlaylist.totalDuration())


darrenLibrary.addPlaylistToLibrary(darrenPlaylist);




