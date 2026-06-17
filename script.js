
/* 🔴 LIVE (maradhat egyszerű) */
let live = localStorage.getItem("live") === "true";

/* 🗳️ FIX SZAVAZÁS */
let fixed = JSON.parse(localStorage.getItem("fixedVotes")) || {
    A: 0, B: 0, C: 0
};

/* 🟣 NAPI SZAVAZÁS */
let daily = JSON.parse(localStorage.getItem("dailyVotes")) || [0,0,0];

let question = localStorage.getItem("dailyQuestion") || "Nincs napi kérdés";

let options = JSON.parse(localStorage.getItem("dailyOptions")) || ["A","B","C"];

/* ------------------ FIX SZAVAZÁS ------------------ */

function voteFixed(type) {
    fixed[type]++;
    localStorage.setItem("fixedVotes", JSON.stringify(fixed));
    renderFixed();
}

function renderFixed() {
    document.getElementById("fixedResult").innerText =
        `👍 Igen: ${fixed.A} | 👎 Nem: ${fixed.B} | 🤔 Van jövője: ${fixed.C}`;
}

/* ------------------ NAPI SZAVAZÁS ------------------ */

function voteDaily(i) {
    daily[i]++;
    localStorage.setItem("dailyVotes", JSON.stringify(daily));
    renderDaily();
}

function renderDaily() {
    document.getElementById("dailyQuestion").innerText = question;

    document.getElementById("opt0").innerText = options[0];
    document.getElementById("opt1").innerText = options[1];
    document.getElementById("opt2").innerText = options[2];

    document.getElementById("dailyResult").innerText =
        `Szavazatok: ${daily[0]} | ${daily[1]} | ${daily[2]}`;
}

/* 📅 MŰSOR */
let program = JSON.parse(localStorage.getItem("program")) || [];

let html = "";

if (program.length === 0) {
    html = "Nincs műsor beállítva";
} else {
    program.forEach(p => {
        html += `
            <div class="program-item">
                <strong>${p.from} - ${p.to}</strong><br>
                🎵 ${p.desc}
            </div>
        `;
    });
}

document.getElementById("programListPublic").innerHTML = html;

/* INIT */
renderFixed();
renderDaily();
