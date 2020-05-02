//variables

let goal = 0;
let shots = 0;
let reset = 0;
const goalSpan1 = document.querySelector("#teamone-numgoals")
const shotSpan1 = document.querySelector("#teamone-numshots")
const goalSpan2 = document.querySelector("#teamtwo-numgoals")
const shotSpan2 = document.querySelector("#teamtwo-numshots")
const resetButton = document.querySelector("#reset-button")
const resetNumber = document.querySelector("#num-resets")
const hitMadeAudio = document.querySelector("#goal-sound")
const crowdCheerAudio = document.querySelector("#crowd-cheer")
const hitMIssAudio = document.querySelector("#miss-sound")

//team one 

const shootButton1 = document.querySelector("#teamone-shoot-button")
shootButton1.addEventListener("click", function () {
    const takeShot1 = Math.random() >= 0.5
    let goal = Number(goalSpan1.innerHTML) + 1
    let shots = Number(shotSpan1.innerHTML) + 1
    const hitImage1 = document.querySelector(".atk-img")
    const missImage1 = document.querySelector(".miss-img")
    if (takeShot1) {
        hitImage1.style.display = "block"
        hitMadeAudio.play();
        goalSpan1.innerHTML = goal
        shotSpan1.innerHTML = shots

    } else {
        missImage1.style.display = "block"
        hitMIssAudio.play();
        shotSpan1.innerHTML = shots
    }
})

// make hit, miss, gif display none
const imgAtkButton = document.querySelector(".atk-img-button")
imgAtkButton.addEventListener("click", function () {
    const hitImage1 = document.querySelector(".atk-img")
    hitImage1.style.display = "none"

})
const imgMissButton = document.querySelector(".miss-img-button")
imgMissButton.addEventListener("click", function () {
    const missImage1 = document.querySelector(".miss-img")
    missImage1.style.display = "none"

})
const imgVictoryButton = document.querySelector(".victory-img-button")
imgVictoryButton.addEventListener("click", function () {
    const victoryImage1 = document.querySelector(".victory-img")
    victoryImage1.style.display = "none"

})


//team 2

const shootButton2 = document.querySelector("#teamtwo-shoot-button")
shootButton2.addEventListener("click", function () {
    const takeShot2 = Math.random() >= 0.5
    let goal = Number(goalSpan2.innerHTML) + 1
    let shots = Number(shotSpan2.innerHTML) + 1
    const hitImage1 = document.querySelector(".atk-img")
    const missImage1 = document.querySelector(".miss-img")
    if (takeShot2) {
        hitImage1.style.display = "block"
        hitMadeAudio.play();
        goalSpan2.innerHTML = goal
        shotSpan2.innerHTML = shots

    } else {
        missImage1.style.display = "block"
        hitMIssAudio.play();
        shotSpan2.innerHTML = shots
    }
})

//reset button


resetButton.addEventListener("click", function () {
    const victoryImage = document.querySelector(".victory-img")
    const victory = document.querySelector(".victory-text")
    let victoryText1 = "Player 1 wins!"
    let victoryText2 = "Player 2 wins!"
    let victoryText3 = "It's a tie!"
    if (goalSpan1.innerHTML > goalSpan2.innerHTML) {
        victory.innerHTML = victoryText1;

    } else if (goalSpan1.innerHTML < goalSpan2.innerHTML) {
        victory.innerHTML = victoryText2;

    } else if (goalSpan1.innerHTML = goalSpan2.innerHTML)
        victory.innerHTML = victoryText3;
    crowdCheerAudio.play();
    goalSpan1.innerHTML = 0;
    goalSpan2.innerHTML = 0;
    shotSpan1.innerHTML = 0;
    shotSpan2.innerHTML = 0;
    victoryImage.style.display = "block"
    resetNumber.innerHTML = reset += 1;

})