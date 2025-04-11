window.addEventListener('DOMContentLoaded', () => 
{
    const card = document.getElementById('card');
    const frontCard = document.querySelector('.flip-card-front');
    const backCard = document.querySelector('flip-card-back');

    setTimeout(() => {
        frontCard.classList.add('show-card');
    }, 500);

    setTimeout(() => {
        backCard.classList.add('show-card');
    }, 1200);


    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});