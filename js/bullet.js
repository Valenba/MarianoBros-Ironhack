function Bullet(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.bx = 200;
    this.by = 700;
    this.vx = 10;
    this.vy = 1;
    this.grav = 0.25;
    this.img = new Image();
    this.img.src = "images/bullet.png";
}

Bullet.prototype.draw = function () {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Bullet.prototype.move = function () {
    this.x += this.vx;

    this.vy += this.grav;
    this.y += this.vy;

    if (this.y > (this.game.canvas.height - 200) + this.game.player.h) {
        this.vy *= -1;
    }
};
Bullet.prototype.collisionEnemie = function (e) {
            return e.x + e.w > this.x &&
                e.x < this.x + this.w &&
                e.y < this.y + this.h &&
                e.h + e.y > this.y;
        
    
};