function Obstacle(game, type, img) {
    this.game = game;
    this.type = type;
    this.img = img;
    if (type == "coin") {
        this.x = 1650;
        this.y = 500;
        this.h = 40;
        this.w = 40;
        this.dx = 5;
        this.vy = 1;
        this.gravity = 0.5;
        this.dy = 5;
    } else if (type == "obstacle") {
        this.x = 1500;
        this.y = 622;
        this.w = 50;
        this.h = 50;
        this.dx = 5;
        
    }
};

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

};
Obstacle.prototype.move = function () {
    if (this.type == "obstacle") {
        this.x -= this.dx;
        if (this.x < -this.game.canvas.width) this.x = 0;
    }else if(this.type == "coin"){
        this.x -= this.dx;
        if (this.y >= 500) {
            this.vy = 1;
            this.y = 500;
        } else {
            this.vy += this.gravity;
            this.y += this.vy;
        }
    }
};
Obstacle.prototype.collision = function () {
    return this.game.player.x < this.x + this.w &&
        this.game.player.x + this.game.player.w > this.x &&
        this.game.player.y < this.y + this.h &&
        this.game.player.h + this.game.player.y > this.y;
};

