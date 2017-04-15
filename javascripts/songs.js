var musicHolder = document.getElementById('songs');
var musicString = "";

function writeToDOM(data){
	for (var i = 0; i < data.songs.length; i++) {
		console.log("I'm here");
		var currentSong = data.songs[i];
		 console.log(currentSong.Song);
		 musicString += `<div><h1> ${data.songs[i].Song} </h1>`;
		 musicString += `<p>${data.songs[i].Artist}  |  ${data.songs[i].Albumn}  |  ${data.songs[i].Genre}</p>  <button name="delete" class="delete" id="delBtn">DELETE</button>`;
		 musicString += `</div>`;
	}
	musicHolder.innerHTML += musicString;
	pageLoaded();
}

	window.addEventListener("click", function(event){
	var delBtn = document.getElementById('delBtn');
		console.log(event.target.parentNode);
		console.log("I clicked delete");
		if (event.target.id === "delBtn") {
	  	event.target.parentNode.remove();
			}
	});
	
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

}

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

