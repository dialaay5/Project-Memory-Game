const game_data = {
    uncoverCards: 0,
    cardOne: undefined,
    cardTwo: undefined,
    firstImg: undefined,
    secondImg: undefined,
    hits: 0,
}


let frontFace_cards = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
frontFace_cards = frontFace_cards.sort(() => { return Math.random() - 0.5 });

function matchCards() {
    if (game_data.firstImg == game_data.secondImg) {
        game_data.uncoverCards = 0;
        game_data.hits++;
        $('#hits').text(`Hits: ${game_data.hits}`)
        if (game_data.hits == 8) {
            Swal.fire({
                title: '',
                text: '',
                imageUrl: "image/won.webp",
                imageWidth: 700,
                imageHeight: 450,
                imageAlt: 'Custom image',
            })
        }
    }

    else {
        setTimeout(() => {
            game_data.cardOne.innerHTML = '';
            game_data.cardTwo.innerHTML = '';
            game_data.cardOne.disabled = false;
            game_data.cardTwo.disabled = false;
            game_data.uncoverCards = 0;
        }, 1000);
    }

}

function flipCard(id) {
    game_data.uncoverCards++;
    if (game_data.uncoverCards == 1) {
        game_data.cardOne = document.getElementById(id);
        game_data.firstImg = frontFace_cards[id]
        game_data.cardOne.innerHTML = `<img src="./image/${game_data.firstImg}.png" >`;

        (game_data.cardOne).disabled = true;

    } else if (game_data.uncoverCards == 2) {
        game_data.cardTwo = document.getElementById(id);
        game_data.secondImg = frontFace_cards[id];
        game_data.cardTwo.innerHTML = `<img src="./image/${game_data.secondImg}.png" >`;

        (game_data.cardTwo).disabled = true;

        matchCards()
    }

}


function play_again() {
    for (i = 0; i <= 15; i++) {
        game_data.cardOne = document.getElementById(i);
        game_data.cardTwo = document.getElementById(i);
        game_data.cardOne.innerHTML = '';
        game_data.cardTwo.innerHTML = '';
        game_data.cardOne.disabled = false;
        game_data.cardTwo.disabled = false;
        game_data.hits = 0
        $('#hits').text(`Hits : ${game_data.hits}`);
         frontFace_cards = frontFace_cards.sort(() => { return Math.random() - 0.5 });

    }
}
