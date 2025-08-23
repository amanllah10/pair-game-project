let allImgs = document.querySelectorAll('.imgs')
let memoryCardDisplay = document.querySelector('.memorycard-display')
let result = document.querySelector('.display-h1')
let newImg = document.querySelector('.new-img')

let imgs = ["./tesla.png", "./speaker.png", "./mango.png", "./speaker.png", "./apple.png", "./cat.jpeg", "./apple.png", "./dog.webp", "./tesla.png", "./mango.png", "./dog.webp", "./cat.jpeg"]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

// ✅ Pehle shuffle karo
imgs = shuffle(imgs);
console.log(imgs = shuffle(imgs))

imgs.forEach((imgs) => {
    let buttons = document.createElement('button')
    let newImgs = document.createElement('img')
    newImgs.src = imgs
    buttons.className = 'button'
    buttons.appendChild(newImgs)
    memoryCardDisplay.appendChild(buttons)
    console.log('hi')
})

let currentActiveButton = null
let lastActiveButton = null
let clickCount = 0
let winClick = 0
let lossClick = 0
let allButtons = document.querySelectorAll('.button')

allButtons.forEach((btns) => {
    btns.addEventListener('click', () => {
        lastActiveButton = currentActiveButton
        currentActiveButton = btns

        btns.classList.toggle('active')
        if (btns.classList.contains('active')) {
            clickCount++
        }
        if (lastActiveButton) {
            console.log('LastActiveButton is', lastActiveButton.innerHTML)
        }
        if (currentActiveButton) {
            console.log('currentActiveButton is ', currentActiveButton.innerHTML)
        }
        if (clickCount === 2) {
            allButtons.forEach((disable) => {
                disable.style.pointerEvents = 'auto'
            })
        }
            if (clickCount % 2 === 0) {
                if (lastActiveButton.innerHTML === currentActiveButton.innerHTML) {

                    result.innerHTML = 'Match'
                    newImg.src = './happy.jpg'
                    winClick++
                    console.log(winClick)
                    if (winClick === 6) {
                        result.innerHTML = 'You Match all Pairs'
                        setTimeout(() => {
                            location.reload()
                        }, 2000)
                    }

                    setTimeout(() => {
                        result.innerHTML = ''
                        newImg.src = './think.png'
                    }, 2000);
                }

            }
        if (clickCount % 2 === 0) {
            if (currentActiveButton.innerHTML !== lastActiveButton.innerHTML) {

                result.innerHTML = 'No Match'
                newImg.src = './sad.jpeg'
                lossClick++
                console.log(lossClick)
                if (lossClick === 5) {
                    result.innerHTML = 'You have lost all chances'

                    allButtons.forEach((disable) => {
                        disable.style.pointerEvents = 'none'
                    })
                    setTimeout(() => {
                        location.reload()
                    }, 5000)
                }

                setTimeout(() => {
                    currentActiveButton.classList.toggle('active')
                    lastActiveButton.classList.toggle('active')
                    result.innerHTML = ''
                    newImg.src = './think.png'
                }, 2000)
            }
        }

        if (currentActiveButton.innerHTML === lastActiveButton) {
            console.log('win')
        }
    })
    console.log(clickCount)
})
