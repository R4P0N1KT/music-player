let musics = [
    {titulo:'Mágoas', artista:'MC Thiago', src:'musics/magoas.mp3', img:'images/magoas.png'},
    {titulo:'A Morte do Autotune 💔', artista:'Matuê', src:'musics/morte-autotune.mp3', img:'images/morte-autotune.png'},
    {titulo:'Slow Mo', artista:'MC Leozin', src:'musics/slow-mo.mp3', img:'images/slow-mo.png'}
];

let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');

musicRenderizing(indexMusic);
document.querySelector(".button-pause").style.display = "none";

// Eventos
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', stopMusic);

music.addEventListener('timeupdate', updateBar);

document.querySelector('.backward').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;
    }
    musicRenderizing(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2){
        indexMusic = 0;
    }
    musicRenderizing(indexMusic);
});

// Funções
function musicRenderizing(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].titulo;
        artistName.textContent = musics[index].artista;
        image.src = musics[index].img;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function stopMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timePassed = document.querySelector('.start');
    timePassed.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minutesCamp = Math.floor(seconds / 60);
    let secondsCamp = seconds % 60;
    if (secondsCamp < 10){
        secondsCamp = '0' + secondsCamp;
    }

    return minutesCamp+':'+secondsCamp;
}

function volumeAudio() {
    music.volume();
}