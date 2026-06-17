
/* 🔴 LIVE */
function toggleLive() {
    let live = localStorage.getItem("live") === "true";
    localStorage.setItem("live", !live);
    alert(live ? "LIVE OFF" : "LIVE ON");
}

/* 📅 MŰSOR */
function addProgram() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let desc = document.getElementById("desc").value;

    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.push({ from, to, desc });

    localStorage.setItem("program", JSON.stringify(program));

    render();
}

function render() {
    let list = document.getElementById("programList");
    list.innerHTML = "";

    let program = JSON.parse(localStorage.getItem("program")) || [];

    program.forEach((p, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${p.from} - ${p.to} → ${p.desc}`;
        list.appendChild(li);
    });
}

/* 📊 FIX SZAVAZÁS TÉMA */
function setTopic() {
    let topic = document.getElementById("topicInput").value;
    localStorage.setItem("fixedTopic", topic);
    alert("Mentve!");
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

    alert("Napi szavazás beállítva!");
}

render();
