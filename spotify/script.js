
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/spotify/songs/");
    let response = await a.text(); // assuming you're fetching directory listing
    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]) ;
        }
    }

    return songs;
} 

async function main() {
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songslist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> <img class="invert" src="music.svg" alt="">
                                <div class="info">
                                    <div >${song}</div>
                                    <div >Adeel</div>
                                </div>
                                <img class="invert playnow" src="play_circle_98dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg" alt=""></li>`;

    }

}

main();

