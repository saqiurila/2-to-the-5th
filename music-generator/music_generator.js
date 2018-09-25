// cerner_2^5_2018
var audios = ["c4.wav", "d4.wav", "e4.wav", "f4.wav", "g4.wav", "a4.wav", "b4.wav", "c5.wav"], players, interval, audio_path = "piano-audios/";
var accompanies = [["g2.wav","c3.wav","e3.wav"],["a2.wav","d3.wav","f3.wav"],["c3.wav","e3.wav","g3.wav"],["a2.wav","c3.wav","f3.wav"],
                   ["d3.wav","g3.wav","b3.wav"],["c3.wav","f3.wav","a3.wav"],["d3.wav","g3.wav","b3.wav"],["e3.wav","g3.wav","c4.wav"]];
$(function () {
    players = $('.player');
});
function generate() {
    clearInterval(interval);
    var speed = Math.floor(Math.random() * 500) + 300;
    $("#speed").html(speed);
    interval = setInterval(generate_one_note, speed);
}
function generate_one_note() {
    play(Math.floor(Math.random() * (audios.length + 1.5))); // +1.5 to generate some rests
}
function play(index) {
    if (index >= audios.length)
        return;
    load_and_play(0, audios[index]); // Melody

    // Harmony
    accompanies[index].forEach(function (accompany, i) {
        if (Math.random() < 0.30) load_and_play(i + 1, accompany);
    });
}
function load_and_play(player_index, audio) {
    players[player_index].src = audio_path + audio;
    players[player_index].load();
    players[player_index].play();
}
function pause_all_players() {
    players.forEach(function (player) { player.pause(); });
}