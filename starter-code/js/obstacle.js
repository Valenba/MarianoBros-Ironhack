function Obstacle(game) {
    this.game = game;
    this.x = 400;
    this.y = 622;
    this.w = 50;
    this.h = 50;
    this.img = new Image();
    this.img.src = "../images/Obstaculo.png";
    this.dx = 5;

};

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

};
Obstacle.prototype.move = function () {
    this.x -= this.dx;
    if (this.x < -this.game.canvas.width) this.x = 0;
};
Obstacle.prototype.collision = function () {
    return this.game.player.x < this.x + this.w &&
        this.game.player.x + this.game.player.w > this.x &&
        this.game.player.y < this.y + this.h &&
        this.game.player.h + this.game.player.y > this.y;
};

