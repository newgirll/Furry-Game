var Furry = require("./furry.js");
 
var Coin = require("./coin.js");


// przechowuje pozycje furrego, monetę, plansze i wynik 
var Game = function(){ 
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        
        return x + (y * 10);
    };
        

    this.showFurry = function(){
        game.hideVisibleFurry();
             
        return this.board[ this.index(this.furry.x,this.furry.y)].classList.add('furry');
                       
    };
        
        
    this.hideVisibleFurry = function(){ 
        this.furryHide = document.querySelector('.furry');
                    
        if(this.furryHide !== null){
            this.furryHide.classList.remove("furry");
                
        }
    };
        

    this.showCoin = function(){
        return this.board[ this.index(this.coin.x,this.coin.y)].classList.add('coin');
    };
        
        
    this.moveFurry = function(){
        if(this.furry.direction === 'right'){
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === 'left'){
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === 'up'){
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === 'down'){
            this.furry.y = this.furry.y + 1;
        }
        
        game.gameOver();
        game.showFurry();
        game.checkCoinCollision();
                        
    };
        

    this.turnFurry = function(event) {   
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
                                
        };
    }
       
    
    this.checkCoinCollision = function(){
        this.scoreText = document.querySelector("#score strong");
        
        this.scoreText.innerText = this.score;
               
        if(this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        
            this.board[ this.index(this.coin.x,this.coin.y)].classList.remove('coin');
            this.score++;
            this.score.innerText = this.score;
            this.coin = new Coin();
            game.showCoin();
        }
    };
       
        
    this.gameOver = function() {
        if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
        
            clearInterval(self.idSetInterval);
            game.hideVisibleFurry();
            let header = document.createElement("h1");
            let textScore = document.createElement("p");
            header.className = "header";
            header.innerText = "GAME OVER "
            textScore.innerText =  "Your result : " + this.score;
            document.querySelector("body").appendChild(header);
            header.appendChild(textScore);
                    
        }
        
    };
              
        
    this.startGame = function(){
        this.self = this;
        self.idSetInterval = setInterval(function(){
        
        game.moveFurry();
                  
        },250);
        
        return self.idSetInterval;
    };
        
}
module.exports = Game;
var game = new Game();
game.showFurry();
game.showCoin();
game.startGame(); 

document.addEventListener('keydown', function(event){
        game.turnFurry(event);
});





