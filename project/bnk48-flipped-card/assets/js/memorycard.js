document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    const modal = document.getElementById('win-modal');
    const restartButton = document.getElementById('restart-button');

    let firstCard, secondCard;
    let hasFlippedCard = false;
    let lockBoard = false;
    let matchedPairs = 0;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        gsap.to(this, {
            duration: 0.48,
            rotationY: "+=180",
            ease: "power2.inOut"
        });

        this.classList.add('flipped');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatched = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatched ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matchedPairs++;
        if (matchedPairs === cards.length / 2) {
            setTimeout(showWinModal, 1000);
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            gsap.to([firstCard, secondCard], {
                duration: 0.48,
                rotationY: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    resetBoard();
                }
            });
        }, 1200);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function showWinModal() {
        const modalContent = document.querySelector('.modal-content');
        modal.classList.add('active');
        gsap.fromTo(modalContent,
            { scale: 0.7, opacity: 0 },
            { duration: 0.5, scale: 1, opacity: 1, ease: 'back.out(1.7)' }
        );
    }

    function restartGame() {
        modal.classList.remove('active');

        matchedPairs = 0;
        resetBoard();

        setTimeout(() => {
            cards.forEach(card => {
                gsap.to(card, {
                    duration: 0.6,
                    rotationY: 0,
                    ease: "power2.inOut",
                    onComplete: () => {
                        card.classList.remove('flipped');
                        card.addEventListener('click', flipCard);
                    }
                });
            });

            setTimeout(shuffle, 600);
        }, 300);
    }

    function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    }

    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
    restartButton.addEventListener('click', restartGame);
});
