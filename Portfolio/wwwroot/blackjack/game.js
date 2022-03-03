const gameState = {
	playerHand: 0,
	playerAceCount: 0,
	dealerHand: 0,
	dealerAceCount: 0,
	conclusion: "",
	cardOptions: [1,2,3,4,5,6,7,8,9,10,10,10,10],
	cardDraws: ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'],
	currentCard: 0,
	hiddenDraw: 0

	
}

function preload () {
	//loads the background images
	this.load.image('background', 'Images/felt.jpg');
	//loads the images for all of the cards
	this.load.image('ace', 'CardImages/ace_of_clubs.png');
	this.load.image('two', 'CardImages/2_of_clubs.png');
	this.load.image('three', 'CardImages/3_of_clubs.png');
	this.load.image('four', 'CardImages/4_of_clubs.png');
	this.load.image('five', 'CardImages/5_of_clubs.png');
	this.load.image('six', 'CardImages/6_of_clubs.png');
	this.load.image('seven', 'CardImages/7_of_clubs.png');
	this.load.image('eight', 'CardImages/8_of_clubs.png');
	this.load.image('nine', 'CardImages/9_of_clubs.png');
	this.load.image('ten', 'CardImages/10_of_clubs.png');
	this.load.image('jack', 'CardImages/jack_of_clubs2.png');
	this.load.image('queen', 'CardImages/queen_of_clubs2.png');
	this.load.image('king', 'CardImages/king_of_clubs2.png');
	this.load.image('back', 'CardImages/red_joker.png');
	// loads hit and stay buttons
	this.load.image('hit' , 'Images/Hit.png');
	this.load.image('stay', 'Images/Stay.png');

}


function create () {
	// adds background to the canvas
	this.add.image(0, 0, 'background');


	gameState.endText = this.add.text(200, 180, gameState.conclusion, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}, 0xffffff);




	function startingDeal(){
		gameState.playerHand = 0;
		gameState.playerAceCount = 0;
		gameState.draw = Math.floor(Math.random() * 13);
		gameState.playercards.create(gameState.nextPlayerCardX, 280, gameState.cardDraws[gameState.draw]);
		gameState.nextPlayerCardX += 50;
		gameState.currentCard = gameState.cardOptions[gameState.draw];
		gameState.playerHand += gameState.currentCard;
		if(gameState.currentCard===1){
			gameState.playerAceCount ++;
		}
		console.log(gameState.draw);

	
		
		console.log("card " +gameState.currentCard);

		console.log("player hand " + gameState.playerHand);
		gameState.draw = Math.floor(Math.random() * 13);

		gameState.playercards.create(gameState.nextPlayerCardX, 280, gameState.cardDraws[gameState.draw]);
		gameState.nextPlayerCardX += 50;
		gameState.currentCard = gameState.cardOptions[gameState.draw];
		gameState.playerHand += gameState.currentCard;
		if(gameState.currentCard===1){
			gameState.playerAceCount ++;
		}
		console.log("card " +gameState.currentCard);


		console.log("player hand " + gameState.playerHand);

	
	}
	function dealerDeal(){
		gameState.dealerHand = 0;
		gameState.draw = Math.floor(Math.random() * 13);

		gameState.playercards.create(gameState.nextDealerCardX,100, gameState.cardDraws[gameState.draw]);
		gameState.nextDealerCardX += 50;
		gameState.currentCard = gameState.cardOptions[gameState.draw];
		gameState.dealerHand += gameState.currentCard;
		console.log("card " +gameState.currentCard);

		console.log("dealer hand " + gameState.dealerHand);
		gameState.draw = Math.floor(Math.random() * 13);
		gameState.hiddenDraw = gameState.draw;
		gameState.hiddenCard.create(gameState.nextDealerCardX,100, 'back');
		gameState.nextDealerCardX += 50;
		gameState.currentCard = gameState.cardOptions[gameState.draw];
		gameState.dealerHand += gameState.currentCard;
		console.log("card " +gameState.currentCard);

		console.log("dealer hand " + gameState.dealerHand);

	}
	
	function gameStart(){
		startingDeal();
		dealerDeal();
	}

	function resetGame(){
		console.log(gameState.playerHand);
		gameState.conclusion= "";
		gameState.endText.setText( gameState.conclusion);
		gameState.playercards.clear(true,true);
		gameState.nextPlayerCardX = 50;
		gameState.nextDealerCardX = 75;
		gameStart();
	}

	gameState.playercards = this.add.group();
	gameState.hiddenCard = this.add.group();
	
	gameState.nextPlayerCardX = 55;
	gameState.nextDealerCardX = 75;

	gameStart();

	const hitButton = this.add.sprite(550, 200, 'hit');
	hitButton.setInteractive();
	const stayButton = this.add.sprite(550, 300, 'stay');
	stayButton.setInteractive();
	hitButton.on('pointerup', function(){
		gameState.draw = Math.floor(Math.random() * 13);
		gameState.playercards.create(gameState.nextPlayerCardX, 280, gameState.cardDraws[gameState.draw]);
		gameState.nextPlayerCardX += 50;
		gameState.currentCard = gameState.cardOptions[gameState.draw];
		gameState.playerHand += gameState.currentCard;
		if(gameState.currentCard===1){
			gameState.playerAceCount ++;
		}
		console.log("card " +gameState.currentCard);

		
		console.log("card " +gameState.currentCard);

		console.log("player hand " + gameState.playerHand);
		
			console.log(gameState.playerHand);
			if(gameState.playerHand>21){
				gameState.conclusion = "Busted!   Dealer Wins"
				console.log("Bust");
				gameState.endText.setText( gameState.conclusion);
		  }

	}
	);

	this.input.on('pointerdown',function(){
		if(!gameState.conclusion == ""){
		resetGame();
		}
	})
	stayButton.on('pointerup', function(){
		gameState.hiddenCard.clear(true,true);
		gameState.playercards.create(125,100, gameState.cardDraws[gameState.hiddenDraw]);


		
		while(gameState.dealerHand<17){		
			gameState.draw = Math.floor(Math.random() * 13);

			gameState.playercards.create(gameState.nextDealerCardX,100, gameState.cardDraws[gameState.draw]);
			gameState.nextDealerCardX += 50;
			gameState.currentCard = gameState.cardOptions[gameState.draw];
			gameState.dealerHand += gameState.currentCard;
			console.log("card " +gameState.currentCard);
			console.log("dealer hand " + gameState.dealerHand);



		}

		console.log("Player Hand: "+ gameState.playerHand + " Dealer Hand: "+ gameState.dealerHand);

		
			if(gameState.playerAceCount>=1 && gameState.playerHand+10<22){
				gameState.playerHand += 10;
				gameState.playerAceCount --;
				console.log("Player Ace Count " + gameState.playerAceCount);
				console.log("Player Hand Count " + gameState.playerHand);
			}


		if (gameState.dealerHand>21){
			gameState.conclusion = "Dealer Busted! \n You Win";
			console.log("Player Wins!")
		}
		else if(gameState.dealerHand > gameState.playerHand){
			gameState.conclusion = "Dealer Wins";
			console.log("Dealer Wins!");
		}
		else if(gameState.dealerHand < gameState.playerHand){
			gameState.conclusion = "Player Wins!";

			console.log("Player Wins!");
		}
		else {
			gameState.conclusion = "Push"
			console.log("Tie");
		}

		gameState.endText.setText( gameState.conclusion);


	})




	
		

}

function update () {


}

const config = {
  type: Phaser.AUTO,
  width: 640,
	height: 360,
	
	color:"000000",
	stroke: "0x000000",
  scene: {
		preload,
		create,
		update
	}
}

const game = new Phaser.Game(config);
