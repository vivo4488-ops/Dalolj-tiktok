
/* 🔴 LIVE */
function toggleLive() {
    let live = localStorage.getItem("live") === "true";
    localStorage.setItem("live", !live);
    alert(live ? "LIVE OFF" : "LIVE ON");
}

/* 📅 MŰSOR */
function getProgram() {
    return JSON.parse(localStorage.getItem("program")) || [];
}

function saveProgram(program) {
    localStorage.setItem("program", JSON.stringify(program));
    render();
}

function addProgram() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let desc = document.getElementById("desc").value;

    let program = getProgram();

    program.push({ from, to, desc });

    saveProgram(program);
}

function deleteProgram(i) {
    let program = getProgram();
    program.splice(i, 1);
    saveProgram(program);
}

function editProgram(i) {
    let program = getProgram();
    let p = program[i];

    document.getElementById("from").value = p.from;
    document.getElementById("to").value = p.to;
    document.getElementById("desc").value = p.desc;

    deleteProgram(i);
}

function render() {
    let list = document.getElementById("programList");
    list.innerHTML = "";

    let program = getProgram();

    program.forEach((p, i) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${p.from} - ${p.to} → ${p.desc}
            <button onclick="editProgram(${i})">✏️</button>
            <button onclick="deleteProgram(${i})">❌</button>
        `;
        list.appendChild(li);
    });
}

/* 📊 FIX SZAVAZÁS */
function setTopic() {
    let topic = document.getElementById("topicInput").value;
    localStorage.setItem("fixedTopic", topic);
}

/* 🟣 NAPI SZAVAZÁS */
function setDaily() {
    let q = document.getElementById("q").value;
    let o1 = document.getElementById("o1").value;
    let o2 = document.getElementById("o2").value;
    let o3 = document.getElementById("o3").value;

    localStorage.setItem("dailyQuestion", q);
    localStorage.setItem("dailyOptions", JSON.stringify([o1,o2,o3]));
    localStorage.setItem("dailyVotes", JSON.stringify([0,0,0]));

    alert("Mentve!");
}

/* 📩 ELÉRHETŐSÉG */
function setContact() {
    let c = document.getElementById("contactInput").value;
    localStorage.setItem("contact", c);
    alert("Elérhetőség mentve!");
}

render();
