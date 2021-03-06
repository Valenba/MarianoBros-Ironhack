function Obstacle(game, type, img) {
    this.game = game;
    this.type = type;
    this.img = img;
    if (type == "coin") {
        this.x = 1650;
        this.y = 600;
        this.h = 60;
        this.w = 60;
        this.dx = 5;
        this.vy = 0;
        this.gravity = 0.3;
        this.dy = 5;
    } else if (type == "obstacle") {
        this.x = 1500;
        this.y = 610;
        this.w = 150;
        this.h = 150;
        this.dx = 5;

    } else if (type == "enemie") {
        this.x = 1650;
        this.y = 600;
        this.w = 50;
        this.h = 50;
        this.dx = 5;
        this.vy = 0;
        this.gravity = 0.3;
        this.dy = 5;
    }
};

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

};
Obstacle.prototype.move = function () {
    this.x -= this.dx;
    if (this.type == "obstacle") {
        if (this.x < -this.game.canvas.width) this.x = 0;
    } else if (this.type == "coin" || this.type == "enemie") {
        if (this.y <= 422) {
            this.vy += this.gravity;
            this.y += this.vy;
        } else {
            this.y += this.vy;
            this.vy -= this.gravity;
        }
    }
};
Obstacle.prototype.collision = function () {
    return this.game.player.x < this.x + this.w &&
        this.game.player.x + this.game.player.w > this.x &&
        this.game.player.y < this.y + this.h &&
        this.game.player.h + this.game.player.y - 35 > this.y;
};
Obstacle.prototype.collisionEnemie = function () {
    return this.game.player.bullets.some(function (e) {
        if (this.type == "enemie") {
            return e.x + e.w > this.x &&
                e.x < this.x + this.w &&
                e.y < this.y + this.h &&
                e.h + e.y > this.y;
        } else {
            return false;
        }
    }.bind(this));
};
