const temperature = document.getElementById("tempNumber").innerHTML
const windspeed = document.getElementById("windspeed").innerHTML

function calculateWindChill (temperature, windspeed) {
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16)
    console.log(windchill)
    return windchill
}

if (temperature <= 50 && windspeed >= 3) {
    document.querySelector("#windchill").innerHTML = `${Math.round(calculateWindChill(temperature, windspeed))} &#8457;`
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}