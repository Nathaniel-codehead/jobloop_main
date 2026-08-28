function cat() {
    const new_image = document.createElement("img");
    new_image.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fcat%2Fcat_PNG50497.png&f=1&nofb=1&ipt=cc5650ed652a3cf1bb13648505b63e9e516aec3ef876830f141a449f00bd63e2";
    new_image.height = 100
    new_image.className = "cat"
    new_image.style.position = "absolute"
    new_image.style.left = `${Math.round(Math.random() * 1500)}px`
    new_image.style.top = `-${100 + Math.round(Math.random() * 200)}px`
    document.body.appendChild(new_image);
}

function move_cats() {
    let cats = document.getElementsByClassName("cat")
    if (cats.length < 20 && Math.random() > 0.9) {
        cat()
    }
    if (cats.length < 1) {
        return
    }
    for (let i = 0; i < cats.length; i++) {
        if (parseInt(cats[i].style.top) >= 1000) {
            cats[i].remove()
        } else {
            cats[i].style.top = `${parseInt(cats[i].style.top) + 5}px`
        }
    }
}

setInterval(move_cats, 10)