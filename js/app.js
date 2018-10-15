// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.length = 101;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.height = 65;
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
        this.x += this.speed * dt;
    } else {
        this.x = -100 * Math.floor((Math.random() * 4) + 1);
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
        this.x = this.midPosX;
        this.y = this.midPosY;
        this.height = 75;
        this.width = 65;
        this.sprite = 'images/char-boy.png';
        this.reset = function () {
            this.x = this.midPosX;
            this.y = this.midPosY;
        }
    }
 //an update method that updates the position of the player
    update() {
        for (let bugs of allEnemies) {
            if (this.x < bugs.x + bugs.width  && this.x + this.width  > bugs.x && this.y < bugs.y + bugs.height && this.y + this.height > bugs.y) {
                this.reset();
                console.log(this.x, this.y, bugs.x,bugs.y);
            }
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
const posY = [55, 143, 230];
const enemy1 = new Enemy(-89, 60, 200);
const enemy2 = new Enemy(-101, 143, 150);
const enemy3 = new Enemy(-180, 230, 150);
const allEnemies = [];
// const allEnemies = posY.map((y, index) => {
//     return new Enemy((-200 * (index + 1)), y, (Math.floor(getRandom(y, 250))));
// }) 
// allEnemies.push(enemy1);
allEnemies.push(enemy2);
// allEnemies.push(enemy3);
// Place the player object in a variable called player
const player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

