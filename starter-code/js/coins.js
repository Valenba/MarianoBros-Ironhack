function Coins(game) {
    this.game = game;
    this.x = 150;
    this.y = 500;
    this.h = 40;
    this.w = 40;
    this.img = new Image();
    this.img.src = "../images/gold-coin.png";
    this.dx = 5;

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

// Coins.prototype.random = function(){

// 		for(x=0;x < 4;x++){
// 			var obX = (200 * x) + Math.round(Math.random() * 150);
// 			var obY = 50 + Math.round(Math.random() * 400);
// 			obstacles.push({"x":obX,"y":obY});
// 		}
// 	}
//     this.coins.push(new Coins(this));
