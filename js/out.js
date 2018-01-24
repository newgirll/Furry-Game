/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var Game = __webpack_require__(1);
  









/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Furry = __webpack_require__(2);
 
var Coin = __webpack_require__(3);


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







/***/ }),
/* 2 */
/***/ (function(module, exports) {


// pozycja i poruszanie się Furry
var Furry = function(){
    
        this.x = 0;
    
        this.y = 0;
    
        this.direction = "right";
    
}
module.exports = Furry;

/***/ }),
/* 3 */
/***/ (function(module, exports) {


// pozycja monety na planszy
var Coin = function(){
    
        this.x = Math.floor(Math.random() * 10);
    
        this.y = Math.floor(Math.random() * 10);
}
module.exports = Coin;

/***/ })
/******/ ]);