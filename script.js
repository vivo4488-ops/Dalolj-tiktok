let live = false;

function toggleLive() {
    live = !live;
    document.getElementById("status").innerText =
        live ? "🔴 Élő adás VAN!" : "⚫ Nincs élő adás";
}

/* SZAVAZÁS */
let votes = { A: 0, B: 0 };

function vote(type) {
    votes[type]++;
    document.getElementById("result").innerText =
        `Pop: ${votes.A} | Rap: ${votes.B}`;
}

/* ZENEKÉRÉS */
function requestSong() {
    let song = document.getElementById("songInput").value;
    if (!song) return;

    let li = document.createElement("li");
    li.textContent = "🎵 " + song;
    document.getElementById("songList").appendChild(li);

    document.getElementById("songInput").value = "";
}

/* SZÍVKÜLDI */
function sendMessage() {
    let msg = document.getElementById("msgInput").value;
    if (!msg) return;

    let li = document.createElement("li");
    li.textContent = "💌 " + msg;
    document.getElementById("msgList").appendChild(li);

    document.getElementById("msgInput").value = "";
}
