
/* 🔴 LIVE */
function toggleLive() {
    let live = localStorage.getItem("live") === "true";
    localStorage.setItem("live", !live);
    alert(live ? "LIVE OFF" : "LIVE ON");
}

/* 📅 MŰSOR BETÖLTÉS */
function getProgram() {
    return JSON.parse(localStorage.getItem("program")) || [];
}

function saveProgram(program) {
    localStorage.setItem("program", JSON.stringify(program));
    render();
}

/* ➕ HOZZÁADÁS */
function addProgram() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let desc = document.getElementById("desc").value;

    if (!from || !to || !desc) return;

    let program = getProgram();

    program.push({ from, to, desc });

    saveProgram(program);
}

/* ❌ TÖRLÉS */
function deleteProgram(index) {
    let program = getProgram();

    program.splice(index, 1);

    saveProgram(program);
}

/* ✏️ SZERKESZTÉS */
function editProgram(index) {
    let program = getProgram();
    let item = program[index];

    document.getElementById("from").value = item.from;
    document.getElementById("to").value = item.to;
    document.getElementById("desc").value = item.desc;

    deleteProgram(index);
}

/* 📋 LISTA */
function render() {
    let list = document.getElementById("programList");
    list.innerHTML = "";

    let program = getProgram();

    program.forEach((p, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${p.from} - ${p.to}</strong> → ${p.desc}
            <button onclick="editProgram(${index})">✏️</button>
            <button onclick="deleteProgram(${index})">❌</button>
        `;

        list.appendChild(li);
    });
}

/* 📊 FIX SZAVAZÁS TÉMA */
function setTopic() {
    let topic = document.getElementById("topicInput").value;
    localStorage.setItem("topic", topic);
    alert("Mentve!");
}

/* 🟣 NAPI SZAVAZÁS (maradhat) */
function setDaily() {
    let q = document.getElementById("q").value;
    let o1 = document.getElementById("o1").value;
    let o2 = document.getElementById("o2").value;
    let o3 = document.getElementById("o3").value;

    localStorage.setItem("dailyQuestion", q);
    localStorage.setItem("dailyOptions", JSON.stringify([o1,o2,o3]));
    localStorage.setItem("dailyVotes", JSON.stringify([0,0,0]));

    alert("Napi szavazás beállítva!");
}

render();
