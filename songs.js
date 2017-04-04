var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Each student must add one song to the beginning.
	songs.unshift("Fill Me Up");
//console.log("1",songs);
//Each student must add one song to the end of the array.
	songs.push("I Need You More");
//console.log("2",songs);
//Loop over the array and remove any words or characters that obviously don't belong.

var newSong = [];
for (var i = 0; i < songs.length; i++) {
	newSong[i] = songs[i].replace("*", '').replace("!", '').replace("@", '').replace("(", '');
}
songs = newSong;
console.log("3",newSong);
console.log("3",songs);
//Students must find and replace the > character in each item with a - character.

for (var i = 0; i < newSong.length; i++) {
	newSong[i] = songs[i].replace(">", "-");
}
console.log("4",newSong);
//Add each string to the DOM in index.html in the main content area.
function buildDOM() {
var newSongElement = document.getElementById("songs");

var list = newSongElement.innerHTML;
list += "<div>";
for (var i = 0; i < newSong.length; i++) {
		list += "<p>" + newSong[i] +"</p>";
	
	}
list += "</div>";
newSongElement.innerHTML = list;
}
buildDOM();
