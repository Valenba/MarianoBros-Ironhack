function Game() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;

    this.reset();
};

Game.prototype.start = function () {
    this.interval = setInterval(function () {
        this.clear();
        this.draw();
        this.moveBack();

        this.counter++;
        if (this.counter % 50 === 0) {
            this.newObstacle();
            this.newCoin();
        }
        this.coins.forEach(function(e) {
            if (e.collision())
            this.gameOver();
        }.bind(this))

        this.obstacles.forEach(function (e) {
            if (e.collision())
                this.gameOver();
        }.bind(this))
    }.bind(this), 1000 / this.fps);



};
Game.prototype.draw = function () {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
    this.coins.forEach(function (coin) { coin.draw(); });
};


Game.prototype.moveBack = function () {
    this.background.move();
    this.player.key();
    this.player.gravity();
    //this.obstacle.move();
    this.coins.forEach(function (coin) { coin.move(); });;
    this.obstacles.forEach(function (obstacle) { obstacle.move(); });
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.gameOver = function () {

    clearInterval(this.interval)
    if (window.confirm("GAME OVER. Play again?")) {
        this.reset();
        this.start();
    }
};
Game.prototype.reset = function () {
    this.background = new Background(this);
    this.player = new Player(this);
    //this.obstacle = new Obstacle(this);
    this.coins = new Coins(this);
    this.obstacles = [];
    this.coins = [];
    this.counter = 0;
};
Game.prototype.newObstacle = function () {
    this.obstacles.push(new Obstacle(this));
};
Game.prototype.newCoin = function () {
    this.coins.push(new Coins(this));
};
// Game.prototype.clearCoin = function (){
//     this coins
// };


