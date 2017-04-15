// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// //Each student must add one song to the beginning.
// 	songs.unshift("Fill Me Up");
// //console.log("1",songs);
// //Each student must add one song to the end of the array.
// 	songs.push("I Need You More");
// //console.log("2",songs);
// //Loop over the array and remove any words or characters that obviously don't belong.

// var newSong = [];
// for (var i = 0; i < songs.length; i++) {
// 	newSong[i] = songs[i].replace("*", '').replace("!", '').replace("@", '').replace("(", '');
// }
// songs = newSong;
// console.log("3",newSong);
// console.log("3",songs);
// //Students must find and replace the > character in each item with a - character.

// for (var i = 0; i < newSong.length; i++) {
// 	newSong[i] = songs[i].replace(">", "-");
// }
// console.log("4",newSong);
// //Add each string to the DOM in index.html in the main content area.
// function buildDOM() {
// var newSongElement = document.getElementById("songs");

// var list = newSongElement.innerHTML;
// list += "<div>";
// for (var i = 0; i < newSong.length; i++) {
// 		list += "<p>" + newSong[i] +"</p>";
	
// 	}
// list += "</div>";
// newSongElement.innerHTML = list;
// }
// buildDOM();
var musicHolder = document.getElementById('songs');
var musicString = "";

function writeToDOM(data){
	for (var i = 0; i < data.songs.length; i++) {
		console.log("I'm here");
		var currentSong = data.songs[i];
		 console.log(currentSong.Song);
		 musicString += `<section><h1> ${data.songs[i].Song} </h1>`;
		 musicString += `<p>${data.songs[i].Artist}  |  ${data.songs[i].Albumn}  |  ${data.songs[i].Genre} <button name="delete" id="delBtn">DELETE</button></p></section>`;
		 musicString += `	</div>`;
	}
	musicHolder.innerHTML += musicString;
	pageLoaded();
}

function pageLoaded(){
	musicHolder.innerHTML += `<a id="more" href="#">More...</a>`;
	var moreBtn = document.getElementById('more');

	moreBtn.addEventListener("click", function(event){
		musicHolder.innerHTML = "";
		var secondRequest = new XMLHttpRequest();
		secondRequest.addEventListener("load", loadSecondFile);
		secondRequest.addEventListener("error", loadSecondFileFailed);
		secondRequest.open("GET", "./db/music2.json");
		secondRequest.send();
	});

	delBtn.addEventListener("click", function(event){
		if (event.target.id === "delBtn") {
	  	event.target.parentNode.remove();
			}
	});
}



//getTarget(event){
//	let e = event || window.event;
//	let target = e.srcElement.id //or .className for class
//	
//	if (target === 'delBtn') { //your id
//		target.parentNode.remove();
//	}
//}


function loadFile(){
	var data = JSON.parse(this.responseText);
	writeToDOM(data);
}

function loadFailed(){
	alert("Sorry, There is a problem loading the file");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", loadFile);
myRequest.addEventListener("error", loadFailed);
myRequest.open("GET", "./db/music.json");
myRequest.send();

function loadSecondFile(){
	var data2 = JSON.parse(this.responseText);
	writeToDOM(data2);
	var moreBtn = document.getElementById('more');
	moreBtn.disabled();
}

function loadSecondFileFailed(){
	alert("Sorry, There is a problem loading the file");
}

