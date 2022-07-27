const galaxy = document.getElementById('galaxy');
const title = document.getElementById('title');

document.body.addEventListener('click', renderStars);

function renderStars(){
    const stars = new Array(120).fill('⭐✨');
    galaxy.innerHTML = stars.join(''); 
    galaxy.style.visibility = 'visible';
    title.style.visibility = 'hidden';
}
