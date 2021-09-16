const currentColor = document.querySelector('#currentColor')
const container = document.querySelector('.container')

const getHex = () => {
    let color = '#'
    let primaryColorNumber = 3
    let randomRGBNumber
    for( let i= 1;i<=primaryColorNumber;i++){
        randomRGBNumber = Math.random*255
        if(randomRGBNumber.length==1){
            randomRGBNumber= "0"+randomRGBNumber
        }
        color += randomRGBNumber.toString(16)
    }
}