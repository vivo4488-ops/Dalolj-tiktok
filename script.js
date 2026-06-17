
/* 🗳️ FIX */
let fixed = JSON.parse(localStorage.getItem("fixedVotes")) || {
    A: 0, B: 0, C: 0
};

/* 🟣 NAPI */
let dailyVotes = JSON.parse(localStorage.getItem("dailyVotes")) || [0,0,0];
let question = localStorage.getItem("dailyQuestion") || "Nincs napi kérdés";
let options = JSON.parse(localStorage.getItem("dailyOptions")) || ["A","B","C"];

/* 📩 */
let contact = localStorage.getItem("contact") || "radioradio@example.com";

/* 🔴 LIVE */
function updateLive() {
    let live = localStorage.getItem("live") === "true";

    let status = document.getElementById("status");
    let card = document.getElementById("liveCard");

    if (live) {
        status.innerHTML = "🔴 ON AIR – Élő adás folyamatban!";
        status.className = "live-on";
        card.classList.add("live-active");
    } else {
        status.innerHTML = "⚫ Nincs élő adás jelenleg";
        status.className = "live-off";
        card.classList.remove("live-active");
    }
}

/* FIX SZAVAZÁS */
function voteFixed(type) {
    fixed[type]++;
    localStorage.setItem("fixedVotes", JSON.stringify(fixed));
    renderFixed();
}

function renderFixed() {
    document.getElementById("fixedResult").innerText =
        `👍 Igen: ${fixed.A} | 👎 Nem: ${fixed.B} | 🤔 Van jövője: ${fixed.C}`;
}

/* NAPI SZAVAZÁS */
function voteDaily(i) {
    dailyVotes[i]++;
    localStorage.setItem("dailyVotes", JSON.stringify(dailyVotes));
    renderDaily();
}

function renderDaily() {
    document.getElementById("dailyQuestion").innerText = "🟣 " + question;

    document.getElementById("opt0").innerText = options[0];
    document.getElementById("opt1").innerText = options[1];
    document.getElementById("opt2").innerText = options[2];

    document.getElementById("dailyResult").innerText =
        `Szavazatok: ${dailyVotes[0]} | ${dailyVotes[1]} | ${dailyVotes[2]}`;
}

/* MŰSOR */
let program = JSON.parse(localStorage.getItem("program")) || [];

function renderProgram() {
    let html = "";

    if (program.length === 0) {
        html = "Nincs műsor";
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
}

/* ELÉRHETŐSÉG */
function renderContact() {
    document.getElementById("contactInfo").innerText = "E-mail: " + contact;
    document.getElementById("contactLink").href = "mailto:" + contact;
}

/* INIT */
renderFixed();
renderDaily();
renderProgram();
renderContact();
updateLive();

/* frissítés */
setInterval(updateLive, 2000);
