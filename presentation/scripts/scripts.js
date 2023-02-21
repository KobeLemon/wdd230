function activateTiming () {
    let example = document.querySelectorAll(".timingJS")
    example.forEach(item =>
        item.classList.toggle("timing")
    )
}

function activateDelay () {
    let example = document.querySelectorAll(".delayJS")
    example.forEach(item =>
        item.classList.toggle("delay")
    )
}

function activateRepeat () {
    let example = document.querySelectorAll(".repeatJS")
    example.forEach(item =>
        item.classList.toggle("repeat")
    )
}

function activateDirection () {
    let example = document.querySelectorAll(".directionJS")
    example.forEach(item =>
        item.classList.toggle("direction")
    )
}

function activateFillMode () {
    let example = document.querySelectorAll(".fillModeJS")
    example.forEach(item =>
        item.classList.toggle("fillMode")
    )
}

function activateShortLong () {
    let example1 = document.querySelector(".shortJS")
    let example2 = document.querySelector(".longJS")
    example1.classList.toggle("shorthand")
    example2.classList.toggle("longhand")
}
