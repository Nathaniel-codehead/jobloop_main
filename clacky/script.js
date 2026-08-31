let block_l = {
    "speed": 0,
    "mass": 1,
    "position": 500
};

let block_r = {
    "speed": -2,
    "mass": 100,
    "position": 1200
};

let delta = 10
let collisions = 0

// functions
function increment_display() {
    collisions += 1
    document.getElementById("display").innerHTML = `${collisions}`
}

function set_size() {
    document.getElementById("block_l").style.width = "100px"
    document.getElementById("block_r").style.width = `${Math.round((block_r["mass"] * 1000000) ** (1 / 3))}px`

    document.getElementById("block_l").style.height = document.getElementById("block_l").style.width
    document.getElementById("block_r").style.height = document.getElementById("block_r").style.width
}

function tick() {
    block_l["position"] += block_l["speed"]
    block_r["position"] += block_r["speed"]

    if (block_l["position"] < 0) {
        block_l["speed"] *= -1
        block_l["position"] *= -1

        increment_display()
    }

    if (block_r["position"] < (block_l["position"] + 100)) {
        let overlap = (block_l["position"] + 100) - block_r["position"]

        block_l["position"] -= overlap / 2
        block_r["position"] += overlap / 2

        let velocity_l = ((block_l["mass"] - block_r["mass"]) / (block_l["mass"] + block_r["mass"])) * block_l["speed"] + (2 * block_r["mass"]  / (block_l["mass"] + block_r["mass"])) * block_r["speed"]
        let velocity_r = ((block_r["mass"] - block_l["mass"]) / (block_l["mass"] + block_r["mass"])) * block_r["speed"] + (2 * block_l["mass"]  / (block_l["mass"] + block_r["mass"])) * block_l["speed"]
        
        block_l["speed"] = velocity_l
        block_r["speed"] = velocity_r

        increment_display()
    }

    document.getElementById("block_l").style.left = `${Math.round(block_l["position"])}px`
    document.getElementById("block_r").style.left = `${Math.round(block_r["position"])}px`
}


// init
set_size()
tick()

setInterval(tick, delta)