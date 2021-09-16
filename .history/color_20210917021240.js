const currentColor = document.querySelector('#currentColor')
const container = document.querySelector('.container')
const body = document.body

const getHex = () => {
    let color = '#'
    let primaryColorNumber = 3
    let randomRGBNumber
    for( let i= 1;i<=primaryColorNumber;i++){
        randomRGBNumber = Math.round(Math.random()*255)
        if(randomRGBNumber.length==1){
            randomRGBNumber= "0"+randomRGBNumber
        }
        color += randomRGBNumber.toString(16)
    }
    return color
}

const setColor = () => {
    let color = getHex()
    currentColor.textContent= color
    currentColor.style.color = color
    body.style.color = color
}