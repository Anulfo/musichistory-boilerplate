var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"

// The Grinder
var cleanStrings = []
for (var i = 0; i < songs.length; i++) {
cleanStrings[i] = songs[i].replace(">", "-");
cleanStrings[i] = cleanStrings[i].replace("*", "");
cleanStrings[i] = cleanStrings[i].replace("@", "");
cleanStrings[i] = cleanStrings[i].replace("!", "");
cleanStrings[i] = cleanStrings[i].replace("(", "");
cleanStrings.push(cleanStrings[i]);
}
console.log(cleanStrings);
var newSong = "Knives Out by Radiohead on the album Amnesiac";
var newSong2 = "Color a Esperanza by Diego Torres on the album MTV Unplugged";
cleanStrings.push(newSong);
cleanStrings.unshift(newSong2);
console.log(cleanStrings);
var theDom = document.getElementById("songList");

// try for each later 
for (var i = 0; i < cleanStrings.length; i++) {
theDom.innerHTML += "<li>" + cleanStrings[i] + "</li>";
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
