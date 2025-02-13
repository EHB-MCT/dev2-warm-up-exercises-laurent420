document.getElementById("lever").addEventListener("click", function() {
    const symbols = ['♥', '♦', '♣', '♠'];
    
    // Kies willekeurige symbolen
    let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
    let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Update de UI
    document.getElementById("slot-1").innerHTML = `<span class="${slot1}">${slot1}</span>`;
    document.getElementById("slot-2").innerHTML = `<span class="${slot2}">${slot2}</span>`;
    document.getElementById("slot-3").innerHTML = `<span class="${slot3}">${slot3}</span>`;

    // Check op winst of verlies
    if (slot1 === slot2 && slot2 === slot3) {
        document.getElementById("result").textContent = "JE WINT 🎉💰";
    } else {
        document.getElementById("result").textContent = "JE VERLIEST 😭🥺";
    }
});