function toggleLive() {
    let live = localStorage.getItem("live") === "true";
    localStorage.setItem("live", !live);
    alert(live ? "LIVE kikapcsolva" : "LIVE bekapcsolva");
}

/* 📅 MŰSOR HOZZÁADÁS (tól–ig) */
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

/* 📋 LISTA MEGJELENÍTÉS */
function render() {
    let list = document.getElementById("programList");
    list.innerHTML = "";

    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.forEach(p => {
        let li = document.createElement("li");
        li.textContent = `${p.from} - ${p.to} → ${p.desc}`;
        list.appendChild(li);
    });
}

/* 📊 SZAVAZÁS TÉMA */
function setTopic() {
    let topic = document.getElementById("topicInput").value;
    localStorage.setItem("topic", topic);
    alert("Téma mentve!");
}

render();
