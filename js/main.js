document.getElementById("mathsBtn").addEventListener("click", () => {
    showMaths();
});

document.getElementById("readingBtn").addEventListener("click", () => {
    showReading();
});

document.getElementById("writingBtn").addEventListener("click", () => {
    showWriting();
});

document
.getElementById("arcade-link")
.addEventListener("click", () => {

    const code = prompt("Enter Access Code");

    if(code === "1111"){
        alert("🎮 Arcade Unlocked!");
    }
    else{
        alert("❌ Wrong Code");
    }

});

function showMaths(){

    const answer = prompt(
        "Year 3 Maths\n\nWhat is 8 × 7 ?"
    );

    if(answer == 56){
        alert("✅ Correct!");
    }else{
        alert("❌ Try Again!");
    }
}

function showReading(){

    const answer = prompt(
        "Reading Question\n\nTom has a red bike.\n\nWhat colour is Tom's bike?"
    );

    if(
        answer &&
        answer.toLowerCase() === "red"
    ){
        alert("✅ Correct!");
    }else{
        alert("❌ The answer was red.");
    }
}

function showWriting(){

    const answer = prompt(
        "Writing Challenge\n\nWrite one sentence about a dragon."
    );

    if(answer && answer.length > 10){
        alert("🌟 Great Writing!");
    }else{
        alert("✍️ Try writing a longer sentence.");
    }
}
