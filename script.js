// SZAVAZÁS
let votes = { pop: 0, rap: 0, retro: 0 };

function vote(type) {
    votes[type]++;
    document.getElementById("result").innerText =
        `Pop: ${votes.pop} | Rap: ${votes.rap} | Retro: ${votes.retro}`;
}

// ZENEKÉRÉS
function requestSong() {
    let song = document.getElementById("song").value;
    if (song === "") return;

    let li = document.createElement("li");
    li.textContent = song;
    document.getElementById("songList").appendChild(li);

    document.getElementById("song").value = "";
}

// SZÍVKÜLDI
function sendMsg() {
    let msg = document.getElementById("msg").value;
    if (msg === "") return;

    let li = document.createElement("li");
    li.textContent = "💖 " + msg;
    document.getElementById("msgList").appendChild(li);

    document.getElementById("msg").value = "";
}
