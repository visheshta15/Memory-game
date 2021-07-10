document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
        {name: 'three', img: 'cards/3S.png'},{name: 'three1', img: 'cards/3D.png'},
        {name: 'aa', img: 'cards/AS.png'},{name: 'aa1', img: 'cards/AH.png'},
        {name: 'jack', img: 'cards/JC.png'},{name: 'jack1', img: 'cards/JD.png'},
        {name: 'queen', img: 'cards/QC.png'},{name: 'queen1', img: 'cards/QS.png'},
        {name: 'king', img: 'cards/KD.png'},{name: 'king1', img: 'cards/KH.png'},
        {name: 'seven', img: 'cards/7S.png'},{name: 'seven1', img: 'cards/7C.png'},
        {name: 'three', img: 'cards/3S.png'},{name: 'three1', img: 'cards/3D.png'},
        {name: 'aa', img: 'cards/AS.png'},{name: 'aa1', img: 'cards/AH.png'},
        {name: 'jack', img: 'cards/JC.png'},{name: 'jack1', img: 'cards/JD.png'},
        {name: 'queen', img: 'cards/QC.png'},{name: 'queen1', img: 'cards/QS.png'},
        {name: 'king', img: 'cards/KD.png'},{name: 'king1', img: 'cards/KH.png'},
        {name: 'seven', img: 'cards/7S.png'},{name: 'seven1', img: 'cards/7C.png'},


    ]

    cardArray.sort(()=> 0.5 - Math.random());
    let count  = 0

    //-------declaring class object
    const grid = document.querySelector('.grid');
    const score = document.querySelector('.score');
    const moves = document.querySelector('.moves');
    let cardsChoosen = [];
    let cardsChoosenId =[];
    let cardsWon = [];



    //----create your board
    function createBoard(){
        for(i=0; i< cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'blank.png');
            card.setAttribute('data-id', i)
            card.setAttribute('alt', 'card'+i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    
    };


    //----------check for match
    function checkForMatch(){
        const cards =  document.querySelectorAll('img');
        const firstPick = cardsChoosenId[0];
        const secPick = cardsChoosenId[1];
        if(cardsChoosen[0]=== cardsChoosen[1]){
            cards[firstPick].setAttribute('src', 'white.png')
            cards[secPick].setAttribute('src', 'white.png')
            cardsWon.push(cardsChoosen)
            console.log('boom')
        }else{
            cards[firstPick].setAttribute('src', 'blank.png')
            cards[secPick].setAttribute('src', 'blank.png')
            console.log('sorry')
           count=count+1;

        }

        cardsChoosen=[];
        cardsChoosenId= [];
        score.textContent = cardsWon.length
        moves.textContent = count;
        if (cardsWon.length === cardArray.length/2){
            score.textContent = 'Congratulations!!!'
        }

    }

    //-----------flip your card 
    function flipCard(){
        console.log(this);
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChoosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard();
})