import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();

function warmup1() {
    console.log("Exercise week 1");
    
    document.getElementById("button-1a").addEventListener("click", function () {
        let content = document.getElementById("content-1");
        content.innerHTML = "<p>Hallo, dit is de oefening van je naam</p>";
    });

    document.getElementById("button-1b").addEventListener("click", function () {
        let section = document.getElementById("section-1");
        section.style.backgroundColor = section.style.backgroundColor === "lightblue" ? "white" : "lightblue";
    });

    document.getElementById("button-1c").addEventListener("click", function () {
        let content = document.getElementById("content-1");
        let h1 = document.createElement("h1");
        h1.textContent = "Ik ben er klaar voor";
        content.appendChild(h1);
    })
}

warmup1();

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}