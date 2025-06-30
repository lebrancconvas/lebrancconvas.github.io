const cards = document.querySelectorAll('.memory-card')

let firstcard , secondcard
let hasFlippedCard = false
let lockBoard = false

function flipCard() {
    if(lockBoard) return
    if(this === firstcard) return

    this.classList.add('flip')
    if(!hasFlippedCard) {
        hasFlippedCard = true
        firstcard = this
        return
    }

    secondcard = this
    checkForMatch()
}

function checkForMatch() {
    let isMatched = firstcard.dataset.framework === secondcard.dataset.framework
    isMatched ? matchCard() : unmatchCard()
}

function matchCard() {
    firstcard.removeEventListener('click', flipCard)
    secondcard.removeEventListener('click', flipCard)
    resetBoard()
}

function unmatchCard() {
    lockBoard = true
    setTimeout(() => {
        firstcard.classList.remove('flip')
        secondcard.classList.remove('flip')
        resetBoard()
    }, 1000)
}

function resetBoard() {
    hasFlippedCard = false
    lockBoard = false
    firstcard = null
    secondcard = null
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos
    })
})()

cards.forEach(card => card.addEventListener('click',flipCard))
