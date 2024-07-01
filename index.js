let gem = document.querySelector('.gem-cost');
let parsedGem = parseFloat(gem.innerHTML);
let gpc = 1;
let gps = 0;
let time = 600;

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
let event = document.querySelector(".event")

let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")

const upgrades = [
    {
        name: 'clicker',
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector('.clicker-cost').innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        gemMultiplier: 1.03,
        costMultplier: 1.6,
    },
    {
        name: 'clicker2',
        cost: document.querySelector(".clicker2-cost"),
        parsedCost: parseFloat(document.querySelector('.clicker2-cost').innerHTML),
        increase: document.querySelector(".clicker2-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker2-increase").innerHTML),
        level: document.querySelector(".clicker2-level"),
        gemMultiplier: 1.4,
        costMultplier: 1.8,
    },
    {
        name: 'femboy',
        cost: document.querySelector(".femboy-cost"),
        parsedCost: parseFloat(document.querySelector('.femboy-cost').innerHTML),
        increase: document.querySelector(".femboy-increase"),
        parsedIncrease: parseFloat(document.querySelector(".femboy-increase").innerHTML),
        level: document.querySelector(".femboy-level"),
        gemMultiplier: 1.5,
        costMultplier: 1.7,
    },
]

function incrementGem() {
    gem.innerHTML = Math.round(parsedGem += gpc);
}

function buyUpgrade(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u
    })

    if (parsedGem >= mu.parsedCost) {
        gem.innerHTML = Math.round(parsedGem -= mu.parsedCost);

        mu.level.innerHTML ++

        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.gemMultiplier).toFixed(2))
        mu.increase.innerHTML = mu.parsedIncrease
        
        mu.parsedCost *= mu.costMultplier;
        mu.cost.innerHTML = Math.round(mu.parsedCost)

        if (mu.name === 'clicker') {
            gpc += mu.parsedIncrease
        } else {
            gps += mu.parsedIncrease
        }
    }
}

function save() {
    localStorage.clear()

    upgrades.map((upgrade) => {

        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrade.level.innerHTML),
            parsedCost: upgrade.parsedCost,
            parsedIncrease: upgrade.parsedIncrease
        })

        localStorage.setItem(upgrade.name, obj)

    })             
    
    localStorage.setItem('gpc', JSON.stringify(gpc))
    localStorage.setItem('gps', JSON.stringify(gps))
    localStorage.setItem('gem', JSON.stringify(parsedGem))

    console.log(localStorage)
}

function load() {
    upgrades.map((upgrade) => {
        const savedValues = JSON.parse(localStorage.getItem(upgrade.name))

        upgrade.parsedCost = savedValues.parsedCost
        upgrade.parsedIncrease = savedValues.parsedIncrease
        
        upgrade.level.innerHTML = savedValues.parsedLevel
        upgrade.cost.innerHTML = Math.round(upgrade.parsedCost)
        upgrade.increase.innerHTML = upgrade.parsedIncrease
    })

    gpc = JSON.parse(localStorage.getItem('gpc'))
    gps = JSON.parse(localStorage.getItem('gps'))
    parsedGem = JSON.parse(localStorage.getItem('gem'))

    gem.innerHTML = Math.round(parsedGem)
}

setInterval(() => {
    parsedGem += gps / time
    gem.innerHTML = Math.round(parsedGem)
    gpcText.innerHTML = Math.round(gpc)
    gpsText.innerHTML = Math.round(gps)
}, 1000)

function goodRandom() {
    var min = 5,
      max = 10;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    console.log('Подождите ' + rand + ' минут');
    setTimeout(goodEvent, rand * 60000);
    setTimeout(stopGoodEvent, rand * 60000 + 60000)
}

function goodEvent() {
    event.innerHTML = 'Ваше видео попало в тренды, x7 кликов на 1 минуту!'
    gpc = gpc*7
    console.log ('монеты увеличены!')
    setTimeout(goodRandom, 2 * 60000)
}

function stopGoodEvent() {
    gpc = gpc/7
    event.innerHTML = ''
}


goodRandom()

