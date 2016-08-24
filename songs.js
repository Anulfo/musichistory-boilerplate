$(document).ready(function() {

  $.ajax({
    url: "https://music-history-3ad4e.firebaseio.com/.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songsFile.json");
    populateDom(contentsOfTheFile);
  });


var populateDom = function (contentsOfTheFile) {
    $.each(contentsOfTheFile.songs, function() {
        // console.log(key, value)
        console.log(this);
        $("#songList").append(
            `<div class="row">
                <h3>Album: </h3>
                <h4>${this.album}</h4>
                <h3>Artist: </h3>
                <h4>${this.artist}</h4>
                <h3>Title: </h3>
                <h4>${this.title}</h4>
            </div>`)
    })
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
