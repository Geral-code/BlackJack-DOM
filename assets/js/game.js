//funciones anonimas autoinvocadas
/* 2C= two of clus (treboles) (C)
   2D = two of diamonds       (D)
   2H = two of hearts         (H) 
   2S = two of spades         (S) 
   La meta es llegar a 21 puntos sin pasarnos
   
   */



(() => {
    let deckOfCards = [];
    const types = ['C', 'D', 'H', 'S'];
    const specials = ['A', 'J', 'Q', 'K']
   

    // Score de los jugadores 
    let scorePlayers = []; // en la posicion 0 guardaremos el acumulativo



    //para acceder al dom debemos crear una referencias 
   // REFERENCIA AL DOM

    //Botones de acciones
    const getBtnCard =document.querySelector("#btnGetCard");
    const stopBtnTurn =  document.querySelector("#btnStopTurn");
    const newBtnGame = document.querySelector("#btnNewGame");

   //Referencia al Area de Juego
    const divCardPlayers = document.querySelectorAll('.divCards');
    const scoreHtml = document.querySelectorAll('small');


    // *---FIN DE REFERENCIAS AL DOM ---*/

// FUNCIONES


//INICIAR EL JUEGO
const startGame = (numPlayer = 2) => {
    console.log('Comenzando el juego');
       //crear la baraja

       deckOfCards = createDeck();
    
    
    // cada nuevo juego se reinicia los puntajes
    scorePlayers = [];
    for(let i=0; i<numPlayer; i++) {
        scorePlayers.push(0); //cero puntaje para mi y para la computadora

    }

 

    


    //puntaje del los jugadores


};



//CREAR LA BARAJA
const createDeck = () => {
    let deckOfCards = [];

    for(let i=2; i <=10; i++) {
    for(let type of types) {
        deckOfCards.push(i + type)

    }
    }

    for (let type of types) {
        for (let special of specials) {
            deckOfCards.push(special + type);
        }
    };

    console.log(deckOfCards);
    return _.shuffle(deckOfCards);

};

//OBTENER UNA CARTA

const getOneCard = () => {

};


//VALOR DE LA CARTA

const valueCard = ()  => {

};

 // CONTADOR DE PUNTAJE

 const countScore = ()  => {

 };


 // CREAR UNA CARTA PARA MOSTRARLA EN EL DOM
 const createCard = () => {

 };

 // DETERMINAR UN GANADOR
  const winnerPlayer = () => {

  };
   
  // PARA LOS TURNOS PARA LA COMPUTADORA
const turnComputer = () => {

};

/* LOS EVENTOS DE LOS BOTONES*/

newBtnGame.addEventListener('click', ()=> {
    startGame();

});





    
})();


