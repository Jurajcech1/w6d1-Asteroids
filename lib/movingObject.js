(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
var Asteroids = window.Asteroids;

  window.Asteroids.MovingObject = function(initObj) {
    this.pos = initObj.pos;
    this.vel = initObj.vel;
    this.radius = initObj.radius;
    this.color = initObj.color;
    this.game = initObj.game;
  };

  window.Asteroids.ma = new Asteroids.MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});


  window.Asteroids.MovingObject.prototype.draw = function(ctx) {

    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();

  };

  window.Asteroids.MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };
})();
