function Player(game) {
    this.game = game;
    this.x = 200;
    this.y = 715;
    this.vy = 1;
    this.vx = 0;
    this.w = 50;
    this.h = 50;
    this.bullets = [];
    this.counter = 0;

    this.img = new Image();
    this.img.src = 'images/player.png';
    this.img.frames = 3;
    this.img.frameIndex = 0;


};

Player.prototype.draw = function () {
    this.game.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0,
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    );
    this.animateImg();

    this.bullets.forEach(function (bullet) {
        bullet.draw();
        bullet.move();
    });

    this.bullets = this.bullets.filter(function (bullet) {

        return bullet.x < this.game.canvas.width;
    }.bind(this));
};

Player.prototype.animateImg = function() {
    if (this.game.counter % 6 === 0) {
      this.img.frameIndex += 1;
  
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
  };

  

Player.prototype.clearBullet = function (e) {

    this.bullets = this.bullets.filter(function (bullet) {
        return !bullet.collisionEnemie(e);

    }.bind(this));
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