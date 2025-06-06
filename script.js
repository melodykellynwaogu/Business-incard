window.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const frontCard = document.querySelector('.flip-card-front');
    const backCard = document.querySelector('.flip-card-back');

    
    setTimeout(() => {
        frontCard.classList.add('show-card');
    }, 500);

   
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        
        if (card.classList.contains('flipped')) {
            setTimeout(() => {
                backCard.classList.add('show-card');
            }, 300);
        } else {
            backCard.classList.remove('show-card');
        }
    });
});