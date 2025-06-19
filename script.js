let heartsCollected = 0;

function startGame() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    createHearts(); 
}

function createHearts() {
    heartsCollected = 0;
    document.getElementById('score').textContent = `Hearts: 0/10`;
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('game-container').querySelectorAll('.heart').forEach(h => h.remove());
    for(let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 90 + 5 + '%';
        heart.style.top = Math.random() * 90 + 5 + '%';
        heart.onclick = () => collectHeart(heart);
        document.getElementById('game-container').appendChild(heart);
    }
}

function collectHeart(heart) {
    heart.style.display = 'none';
    heartsCollected++;
    document.getElementById('score').textContent = `Hearts: ${heartsCollected}/10`;
    document.getElementById('progress-bar').style.width = `${(heartsCollected/10)*100}%`;

    if(heartsCollected === 10) {
        setTimeout(showFinal, 500);
    }
}

function showFinal() {
    window.location.href = "finalPage.html";
}