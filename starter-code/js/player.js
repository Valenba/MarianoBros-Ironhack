function Player(game) {
    this.game = game;
    this.x = 20;
    this.y = 715;
    this.img = new Image();
    this.img.src = "../images/Super_Baby_Mario_24658.png";
    this.vy = 1;
    this.w = 50;
    this.h = 50;
    this.bullets = [];
    this.counter = 0;


};

Player.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);


    this.bullets.forEach(function (bullet) {
        bullet.draw();
        bullet.move();
    });

    this.bullets = this.bullets.filter(function (bullet) {

        return bullet.x < this.game.canvas.width;
    }.bind(this));
};

Player.prototype.clearBullet = function () {

    this.bullets = this.bullets.filter(function (bullet) {

        return !bullet.collisionEnemie();

    });
};



Player.prototype.key = function () {
    document.onkeydown = function (e) {
        if (e.keyCode === TOP && this.y > 400 && this.counter <= 1) {
            this.y -= 150;
            this.vy -= 8;
            this.counter++;

        }
    }.bind(this);
    document.onkeyup = function (e) {
        if (e.keyCode === SPACE) {
            this.shoot();
        }
    }.bind(this);
};


Player.prototype.gravity = function () {
    var gravity = 0.5;
    if (this.y >= 715) {
        this.vy = 1;
        this.y = 715;
        this.counter = 0;
    } else {
        this.vy += gravity;
        this.y += this.vy;
    }

};
Player.prototype.shoot = function () {
    this.bullet = new Bullet(this.game, this.x + this.w, this.y + this.h - 50);

    this.bullets.push(this.bullet);
};

var TOP = 38;
var SPACE = 32;