// math random = 0 > 0.999
// floor > base number /remove decimals
// let percent = 50
// let denom = 1
// let rng = Math.floor(Math.random() * denom + 1)

// console.log(rng)

// Reward Result
let lootbag = []


// generate
function generateLoot() {
    getGoldenSword()
    getElementalStaff()
    getSpectreBow()
    getHellKey()
    getVoidKey()
    if(lootbag){
        for(let i = 0;i < lootbag.length;i++){
            console.log(`You've got ${lootbag[i]}`)
        }
    } else {
        console.log("You didn't get anything!")
    }
}


// items
function getGoldenSword(){
    // 50%,0-1,1/2
    let rng = Math.floor(Math.random() * 2)
    if(rng) {
        lootbag.push('Golden Sword')
    }
}

function getElementalStaff(){
    // 25%,0-3,1/4
    let rng = Math.floor(Math.random() * 4)
    if(!rng) {
        lootbag.push('Elemental Staff')
    }
}

function getSpectreBow(){
    // 10%,0-9,1/10
    let rng = Math.floor(Math.random() * 10)
    if(!rng) {
        lootbag.push('Spectre Bow')
    }
}

function getHellKey(){
    // 1%,0-99,1/100
    let rng = Math.floor(Math.random() * 100)
    if(!rng) {
        lootbag.push('Hell Key')
    }
}

function getVoidKey() {
    // 0.1%,0-999,1/1000
    let rng = Math.floor(Math.random() * 1000)
    if(!rng) {
        lootbag.push('Hell Key')
    }
}

// generateLoot()

// ===================================================

function triesToGetNum() {
    // How long does it take to get 0.1% chance
    let counter = 0
    let onePercent = 1
    while(onePercent != 0) {
        onePercent = Math.floor(Math.random() * 10)
        counter += 1
    }
    return counter
}

function countOccurrences(arr, item) {
    return arr.reduce((a, v) => (v === item ? a + 1 : a), 0)
}

function batch(amount) {
    let tries = []
    for(let i = 0; i < amount;i++){
        tries.push(triesToGetNum())
    }
    console.log("Target: 0.1%")
    console.log(`Amount(array of tries to get target): ${amount}`)
    console.log(`Min:${Math.min(...tries)} Count:${countOccurrences(tries,Math.min(...tries))}`)
    console.log(`Max:${Math.max(...tries)} Count:${countOccurrences(tries,Math.max(...tries))}`)
    console.log(tries)
}
batch(1000)