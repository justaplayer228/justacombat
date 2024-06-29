let gem = document.querySelector('.gem-cost');
let parsedGem = parseFloat(gem.innerHTML);
let gpc = 1;
let gps = 0;

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let clicker2Cost = document.querySelector('.clicker2-cost');
let parsedClicker2Cost = parseFloat(clicker2Cost.innerHTML);
let clicker2Level = document.querySelector(".clicker2-level")
let clicker2Increase = document.querySelector(".clicker2-increase")
let parsedClicker2Increase = parseFloat(clicker2Increase.innerHTML)

let femboyCost = document.querySelector('.femboy-cost');
let parsedFemboyCost = parseFloat(femboyCost.innerHTML);
let femboyLevel = document.querySelector(".femboy-level")
let femboyIncrease = document.querySelector(".femboy-increase")
let parsedFemboyIncrease = parseFloat(femboyIncrease.innerHTML)

let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")


function incrementGem() {
    gem.innerHTML = Math.round(parsedGem += gpc);
}

function buyClick() {
    if (parsedGem >= parsedClickerCost) {
        parsedGem -= parsedClickerCost;
        gem.innerHTML = Math.round(parsedGem);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.6;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyClicker2() {
        if (parsedGem >= parsedClicker2Cost) {
            parsedGem -= parsedClicker2Cost;
            gem.innerHTML = Math.round(parsedGem);
    
            clicker2Level.innerHTML ++
    
            parsedClicker2Increase = parseFloat((parsedClicker2Increase * 2).toFixed(2))
            clicker2Increase.innerHTML = parsedClicker2Increase
            gps += parsedClicker2Increase
    
            parsedClicker2Cost *= 1.6;
            clicker2Cost.innerHTML = Math.round(parsedClicker2Cost)
        }
}

function buyFemboy() {
    if (parsedGem >= parsedFemboyCost) {
        parsedGem -= parsedFemboyCost;
        gem.innerHTML = Math.round(parsedGem);

        femboyLevel.innerHTML ++

        parsedFemboyIncrease = parseFloat((parsedFemboyIncrease * 2).toFixed(2))
        femboyIncrease.innerHTML = parsedFemboyIncrease
        gps += parsedFemboyIncrease

        parsedFemboyCost *= 1.4;
        femboyCost.innerHTML = Math.round(parsedFemboyCost)
    }
}

setInterval(() => {
    parsedGem += gps / 600
    gem.innerHTML = Math.round(parsedGem)
    gpcText.innerHTML = Math.round(gpc)
    gpsText.innerHTML = Math.round(gps)
    console.log(localStorage.getItem('gpc'))
    localStorage.setItem('gpc', Math.round(gpc))
    console.log(localStorage.getItem('gpc'))
}, 1000)