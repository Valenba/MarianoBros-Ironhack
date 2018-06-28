function Bullet(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.bx =20;
    this.by =700;
    this.vx = 10;
    this.vy = 1;
    this.grav = 0.9;
    this.img = new Image();
    this.img.src = "../images/bullet.png";
}

Bullet.prototype.draw = function () {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Bullet.prototype.move = function () {
    this.x += this.vx;
    this.y += this.grav;
    this.y += this.vy;

    if (this.by > this.game.player.y + this.game.player.h) {
        this.vy *= -1;
    }
};