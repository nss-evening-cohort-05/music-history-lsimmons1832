$(document).ready(function() {
	$.getJSON('./db/music.json', function(data){
		$.forIn(data, function(index, value){
			//console.log(value[0].Song);
			console.log(index);
			console.log(value);
			// $.each(value);
			$('.right-screen').append(`<div><h1>${value[0].Song}</h1><p>${value[0].Artist}  |  ${value[0].Albumn}  |  ${value[0].Genre}</p>  <button name="delete" class="delete" id="delBtn">DELETE</button></div>`);
			$('.right-screen').append(`<div><h1>${value[1].Song}</h1><p>${value[1].Artist}  |  ${value[1].Albumn}  |  ${value[2].Genre}</p>  <button name="delete" class="delete" id="delBtn">DELETE</button></div>`);
			$('.right-screen').append(`<div><h1>${value[2].Song}</h1><p>${value[2].Artist}  |  ${value[2].Albumn}  |  ${value[1].Genre}</p>  <button name="delete" class="delete" id="delBtn">DELETE</button></div>`);
			$('.right-screen').append(`<div><h1>${value[3].Song}</h1><p>${value[3].Artist}  |  ${value[3].Albumn}  |  ${value[3].Genre}</p>  <button name="delete" class="delete" id="delBtn">DELETE</button></div>`);
		//songs.push();
	});
	
});



  //   function writeToDOM() {
  //   	$.each(music)
  //     $('right-screen').append(`<div><h1>${music.Song}</h1></div>`);
  //   }

  //   //load objects from json
  //   $.ajax('./db/music.json').done(function(data) {
  //       music = data;
  //       $.ajax('./db/music2.json').done(function(data2) {
  //           data2.forEach(function(song) {
  //               music.push(song);
  //           })
  //           writeToDOM();
  //       }).fail(function(error) {
  //           console.log("There was a problem loading the second file");
  //      })
  //   	}).fail(function(error) {
  //       console.log("There was a problem loading the file");
  // });


});
