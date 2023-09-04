const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');

//making variables 

let  currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

//Function to start your game
const startGame = () =>{

    gameCells.forEach(cell => {

        cell.addEventListener('click',handleClick)
           
    });
}


const handleClick = (e) =>{


    if(e.target.textContent === ''){

        e.target.textContent = playerTurn;
        if(checkWin()){

            console.log(`${playerTurn} is a winner`);
            disableCells();
        }

        else if (checkTie()){

            console.log(`It's a Tie!`);
            disableCells();
        }
        
        else{

            changePlayerTurn();
        }
    }
}

// function to change player turn 
const changePlayerTurn = () =>{

    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}


//function to check winning condn
const checkWin = () => {

    const winingConditions = 
    [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i = 0 ; i<winingConditions.length ; i++){

        const [pos1 , pos2 ,pos3 ] = winingConditions[i];
        if(gameCells[pos1].textContent !== '' && gameCells[pos1].textContent === gameCells[pos2].textContent && gameCells[pos2].textContent === gameCells[pos3].textContent){

            return true;
        }
        
    }

    return false;
}


//Function to check for a tie

const checkTie = () => {

    let emptyCellsCount = 0 ;
    gameCells.forEach(cell => {

        if(cell.textContent === ''){

            emptyCellsCount++;
        }
    });

     return emptyCellsCount === 0 && !checkWin();
}

//function to disable game-board cells after a win or tie
const disableCells = () => {

    gameCells.forEach(cell => {

        cell.removeEventListener('click' , handleClick);
        cell.classList.add('disabled');
    });
}

//calling start game function
startGame();

