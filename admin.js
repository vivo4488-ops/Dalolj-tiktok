function toggleLive() {
    let live = localStorage.getItem("live") === "true";
    localStorage.setItem("live", !live);
    alert(live ? "LIVE kikapcsolva" : "LIVE bekapcsolva");
}

/* 📅 HOZZÁADÁS */
function addProgram() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let desc = document.getElementById("desc").value;

    if (!from || !to || !desc) return;

    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.push({ from, to, desc });

    localStorage.setItem("program", JSON.stringify(program));

    render();
}

/* 📋 MEGJELENÍTÉS + TÖRLÉS */
function render() {
    let list = document.getElementById("programList");
    list.innerHTML = "";

    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.forEach((p, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${p.from} - ${p.to} → ${p.desc}
            <button onclick="deleteProgram(${index})">❌</button>
        `;
        list.appendChild(li);
    });
}

/* ❌ TÖRLÉS */
function deleteProgram(index) {
    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.splice(index, 1);

    localStorage.setItem("program", JSON.stringify(program));

    render();
}

/* 🧹 ÖSSZES TÖRLÉSE (OPCIONÁLIS) */
function clearProgram() {
    localStorage.removeItem("program");
    render();
}

/* 📊 SZAVAZÁS TÉMA */
function setTopic() {
    let topic = document.getElementById("topicInput").value;
    localStorage.setItem("topic", topic);
    alert("Téma mentve!");
}

render();
