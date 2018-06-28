function Coins(game) {
    this.game = game;
    this.coin = true;
    this.x = 1650;
    this.y = 600;
    this.h = 40;
    this.w = 40;
    this.img = new Image();
    this.img.src = "../images/gold-coin.png";
    this.dx = 5;
    this.type = "coin";
};

Coins.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

Coins.prototype.move = function () {
    this.x -= this.dx;
    if (this.x < -this.game.canvas.width) this.x = 0;
};

Coins.prototype.collision = function () {

    return this.game.player.x < this.x + this.w &&
        this.game.player.x + this.game.player.w > this.x &&
        this.game.player.y < this.y + this.h &&
        this.game.player.h + this.game.player.y > this.y;
};
