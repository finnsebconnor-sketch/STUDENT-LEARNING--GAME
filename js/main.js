document
.getElementById("arcade-link")
.addEventListener("click", () => {

    const code = prompt("Enter Access Code");

    if(code === "1111"){
        alert("Arcade Unlocked!");
    }else{
        alert("Wrong Code");
    }

});
