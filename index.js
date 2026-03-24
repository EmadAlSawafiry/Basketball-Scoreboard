let homeCounter = 0
let guestCounter = 0

function homeAddOne() {
    homeCounter += 1
    document.getElementById("home-score").textContent = homeCounter
    currentLeader()
}

function homeAddTwo() {
    homeCounter += 2
    document.getElementById("home-score").textContent = homeCounter
    currentLeader()
}

function homeAddThree() {
    homeCounter += 3
    document.getElementById("home-score").textContent = homeCounter
    currentLeader()
}

function guestAddOne() {
    guestCounter += 1
    document.getElementById("guest-score").textContent = guestCounter
    currentLeader()
}

function guestAddTwo() {
    guestCounter += 2
    document.getElementById("guest-score").textContent = guestCounter
    currentLeader()
}

function guestAddThree() {
    guestCounter += 3
    document.getElementById("guest-score").textContent = guestCounter
    currentLeader()
}

function newGame() {
    homeCounter = 0
    guestCounter = 0
    document.getElementById("home-score").textContent = homeCounter
    document.getElementById("guest-score").textContent = guestCounter
    document.getElementById("leader").textContent = "Current leader: -"
}

function currentLeader() {
    if(homeCounter > guestCounter) {
        document.getElementById("leader").textContent = "Current leader: Home"
    }
    else if(guestCounter > homeCounter){
        document.getElementById("leader").textContent = "Current leader: Guest"
    }
    else {
        document.getElementById("leader").textContent = "Current leader: -"
    }
}