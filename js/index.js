const progress = document.querySelector('input')
const brightness = document.querySelector('.brightness')

let r = 15, g = 14, b = 23;

//background: rgba(15, 14, 23, 1) to rgba(68, 63, 114);


progress.addEventListener('input', handleBrightness)

function handleBrightness(){
    brightness.style.backgroundColor = `rgba(${(68-r)*progress.value}, ${(63-b)*progress.value}, ${(114-b)*progress.value})`
}