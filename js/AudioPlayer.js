$(document).ready(function(){

    let list = $(".list");
    let list_block;

    for (let key in song_list){
        list_block = $('<div class="list_block"></div>');
        list.append(list_block);

        list_block.append('<span class="play_btn"><img class="play_icon" src="icons/play.png"><img class="pause" src="icons/pause.png"></span>');
        list_block.append('<span class="song_title">'+ song_list[key].title +'</span>');
        list_block.append('<span class="song_artist">'+ song_list[key].artist +'</span>');
        list_block.append('<span class="beat_animation"><ul><li></li><li></li><li></li></ul></span>')        
        let wave = list_block.append('<span class="track"><audio id="audio" controls><source src="' + song_list[key].track + '"type="audio/mp3"></audio></span>');
        list_block.append('<span id="download_btn"><a  target="_blank" href="'+ song_list[key].track +'"><class="download_btn"><img src="icons/download.png"></button></span>');
    }

        // Play functionality
    $(".list_block .play_btn .play_icon").on('click', function(current){
        $(this).parent().find(".play_icon").css("display", "none")
        $(this).parent().find(".pause").css("display", "inline-block")
        $(".play_icon").not(this).parent().find(".pause").css("display", "none");
        $(".play_icon").not(this).parent().find(".play_icon").css("display", "inline-block");

        // Add/Remove Class
        $(this).parent().parent().addClass("isPlaying");
        $(".play_icon").not(this).parent().removeClass("isPlaying");

        // Beat animation Play
        $(this).parent().parent().find(".beat_animation li").css("animation-play-state", "running").css("opacity","1");
        $(".play_icon").not(this).parent().parent().find(".beat_animation li").css("animation-play-state","paused").css("opacity", ".1")

        // Pause current audio when play next or previous audio track
        $("audio").each(function(e){
            if(e !==current.currentTarget){
                $(this)[0].pause();
            }
        })

        // Play current audio
        $(this).parent().parent().find(".track audio")[0].play();
    });
    // Pause functionality
    $(".list_block .play_btn .pause").on('click', function(){
            // Hide  pause icon
        $(this).parent().find(".pause").css("display", "none");
            // Show play icon
        $(this).parent().find(".play_icon").css("display", "inline-block");
            // Beat Animation Pause            
        $(this).parent().parent().find(".beat_animation li").css("animation-play-state", "paused");
            // Pause current audio
        $(this).parent().parent().find(".track audio")[0].pause();
    });

});
let index_no = 0;
const song_list = {
        
    "01": {
        title: "Manuever",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/Maneuver.mp3"
        },
    "02": {
        title: "David RockeFella",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/DavidRockeFella.mp3"
        },
    "03": {
        title: "heat",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/Heat.mp3"
        },
    "04": {
        title: "Put it back",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/Put.mp3"
        },
    "05": {
        title: "Move",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/Move.mp3"
        },
    "06": {
        title: "teardrop",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/Teardrops.mp3"
        },
    "07": {
        title: "Ekse'X",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/xekse.mp3"
        },
    "08": {
        title: "way up",
        artist: "Niello",
        genre: "Trap",
        duration: "3:00",
        track: "/songs/WayUp.mp3"
        },
    "10": {
        title: "Formula",
        artist: "*New**",
        genre: "Drill",
        duration: "3:00",
        track: "/songs/formula.mp3"
        },
    "11": {
        title: "Mickey",
        artist: " **Brand New**",
        genre: "Drill",
        duration: "3:00",
        track: "/songs/Mickey.mp3"
        },
    "12": {
        title: "Stay Scheming",
        artist: " **Brand New**",
        genre: "Drill",
        duration: "3:00",
        track: "/songs/Stay scheming.mp3"
        }

};

