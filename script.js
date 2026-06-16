function sendMessage() {
    let msg = document.getElementById("messageInput").value;
    alert("Üzenet elküldve: " + msg);
}

function requestSong() {
    let song = document.getElementById("songInput").value;
    alert("Zenekérés: " + song);
}

let votes = { A: 0, B: 0 };

function vote(option) {
    votes[option]++;
    document.getElementById("result").innerText =
        "A: " + votes.A + " | B: " + votes.B;
}
