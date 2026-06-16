let live = false;

function toggleLive() {
    live = !live;

    document.getElementById("status").innerText =
        live ? "🔴 Élő adás VAN!" : "⚫ Jelenleg nincs élő adás";
}
