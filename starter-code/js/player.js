function Player(game) {
    this.game = game;
    this.x = 20;
    this.y = 622;
    this.img = new Image();
    this.img.src = "../images/Super_Baby_Mario_24658.png";
    this.vy = 1;
    this.w = 50;
    this.h = 50;



};

Player.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

};
Player.prototype.key = function () {
    document.onkeydown = function (e) {
        if (e.keyCode === TOP && this.y == 622) {
            this.y -= 100;
            this.vy -= 10;
        }
    }.bind(this);
};

Player.prototype.gravity = function () {
    var gravity = 0.5;
    if (this.y >= 622) {
        this.vy = 1;
        this.y = 622;
    } else {
        this.vy += gravity;
        this.y += this.vy;
    }

};
var TOP = 38;