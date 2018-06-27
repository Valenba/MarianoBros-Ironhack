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
        this.clearObstacle();

        this.counter += Math.floor(Math.random() * (20 - 10));
        if (this.counter % 50 === 0) {
            this.newObsCoin();

        }


        this.obstacles.forEach(function (e) {
            if (e.collision()) {
                if (e.type == "obstacle") {
                    this.gameOver();
                } else {
                    this.clearCoin();
                    this.background.score += 10;
                }
            }
        }.bind(this))
    }.bind(this), 1000 / this.fps);



};
Game.prototype.draw = function () {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(function (obst) { obst.draw(); });
};


Game.prototype.moveBack = function () {
    this.background.move();
    this.player.key();
    this.player.gravity();
    this.obstacles.forEach(function (obst) { obst.move(); });;
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
    this.img = new Img();
    this.obstacles = [];
    this.counter = 0;
};
Game.prototype.newObsCoin = function () {
    this.obstacles.push(new Obstacle(this, "obstacle", this.img.obstacle));
    this.obstacles.push(new Obstacle(this, "coin", this.img.coin));
};

Game.prototype.clearObstacle = function () {
    this.obstacles = this.obstacles.filter(function (obstacle) {
        return obstacle.x >= 0;
    });
};
Game.prototype.clearCoin = function () {

    this.obstacles = this.obstacles.filter(function (coins) {

        return !coins.collision();

    });
};


