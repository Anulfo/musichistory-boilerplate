$(document).ready(function() {

  $.ajax({
    url: "songsFile.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songsFile.json");
    populateDom(contentsOfTheFile);
  });

var populateDom = function (contentsOfTheFile) {
    console.log(contentsOfTheFile);
    console.log(contentsOfTheFile.songs.breakfast);
}
$("#addView").click(function() {
    console.log("HI")
    $(".listMusicView").addClass("hidden");
    $(".addMusicView").removeClass("hidden");
})

$("#listView").click(function() {
    console.log("HI2")
    $(".addMusicView").addClass("hidden");
    $(".listMusicView").removeClass("hidden");
})

});
