const allPenguins = document.querySelectorAll('[click-penguin]');
const replayButton = document.querySelector('button');

function resetGame() {
    for (let i = 0; i < allPenguins.length; i++) {
        let randomBgMount = Math.floor(Math.random() * 9) + 0;
        allPenguins[i].style.backgroundImage = "url('img/mound_" + [randomBgMount + 1] + ".png')";
        allPenguins[i].style.cursor = 'pointer';
        allPenguins[i].classList.remove('yeti');
    }
}

function showYeti(yeti) {
    setTimeout(() => {
        alert('Yaaaarrrr!')
        resetGame();
    }, 100)
}

function showPenguin() {
    var random = Math.floor(Math.random() * 9) + 0;
    var imageBg =
        [
            "url(img/penguin_1.png)",
            "url(img/penguin_2.png)",
            "url(img/penguin_3.png)",
            "url(img/penguin_4.png)",
            "url(img/penguin_5.png)",
            "url(img/penguin_6.png)",
            "url(img/penguin_7.png)",
            "url(img/penguin_8.png)",
            "url(img/yeti.png)"
        ];

    this.style.backgroundImage = imageBg[random];

    if (random == 8) {
        this.classList.add('yeti');
        var yeti = this;
        showYeti(yeti);
    }

}

allPenguins.forEach(e => e.onclick = showPenguin)
replayButton.addEventListener('click', resetGame);
