function Bullet(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.vx = 10;
    this.vy = 1;
    this.grav = 0.25;
    this.img = new Image();
    this.img.src = "../images/bullet.png";
}

Bullet.prototype.draw = function () {

    this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
}

Bullet.prototype.move = function () {
    this.x += this.vx;

    this.vy += this.grav;
    this.y += this.vy;

    if (this.y > this.game.player.y + this.game.player.h) {
        this.vy *= -1;
    }
};