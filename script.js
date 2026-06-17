let votes = JSON.parse(localStorage.getItem("votes")) || { A: 0, B: 0 };

let topic = localStorage.getItem("topic") || "Nincs beállított műsor";

document.getElementById("voteTopic").innerText = "Szavazás: " + topic;

function vote(type) {
    votes[type]++;
    localStorage.setItem("votes", JSON.stringify(votes));

    document.getElementById("result").innerText =
        `A: ${votes.A} | B: ${votes.B}`;
}
