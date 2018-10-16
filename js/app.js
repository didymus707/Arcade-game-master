// Enemies our player must avoid

var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.length = 101;
    this.height = 45;
    this.width = 95;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.length * 5) {
        this.x += Math.floor(getRandom(120, 400)) * dt;
    } else {
        this.x = -Math.floor(getRandom(100, 300)) * Math.floor((Math.random() * 4) + 1);
    }

};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

class Player{
    constructor() {
        this.length = 101;
        this.breadth = 83;
        this.midPosX = this.length * 2;
        this.midPosY = (this.breadth * 5) - 12;

        // this makes the character to start from the middle of the canvas
        this.x = this.midPosX;
        this.y = this.midPosY;
        this.height = 65;
        this.width = 65;
        this.sprite = 'images/char-boy.png';
        this.resetPos = function () {
            this.x = this.midPosX;
            this.y = this.midPosY;
        }
    }

 //an update method that updates the position of the player

    update() {
        for (let bugs of allEnemies) {
            if (this.x < bugs.x + bugs.width  && this.x + this.width  > bugs.x && this.y < bugs.y + bugs.height && this.y + this.height > bugs.y) {
                this.resetPos();
            } 
        } if (this.y < 55) {
            allEnemies = [];

            //removing the event listener on the buttons
            document.removeEventListener('keyup', keyHandler);           
            modal.classList.toggle('hide');  
        }
    }
 

    //a render method that displays the images on the screen

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


// a handleInput() method.

    handleInput(e) {
        switch(e) {
            case 'up':
            if (this.y > 0) { 
                this.y -= this.breadth;
            }    break;
            case 'right':
            if (this.x < this.length * 4) {
                this.x += this.length;
            }    break;
            case 'down':
            if (this.y < this.breadth * 4) {
                this.y += this.breadth;
            }    break;
            case 'left':
            if (this.x > 0) {
                this.x -= this.length;
            }  break;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

const enemy1 = new Enemy(-89, 60);
const enemy2 = new Enemy(-101, 143);
const enemy3 = new Enemy(-400, 143);
const enemy4 = new Enemy(-220, 230);
const enemy5 = new Enemy(-600, 230);
const enemy6 = new Enemy(-150, 60);
let allEnemies = [];

// pushing all enemies created into all enemies array

allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);

// Place the player object in a variable called player

const player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

function keyHandler(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
}

document.addEventListener('keyup', keyHandler);


// to get a random speed number between two values

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


const modal = document.querySelector('.modal');
const restart = document.querySelector('.restart');

restart.addEventListener('click', function() {
    player.resetPos();
    allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);
    document.addEventListener('keyup', keyHandler);
    modal.classList.toggle('hide');
});
