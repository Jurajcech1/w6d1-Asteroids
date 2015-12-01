(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
  // var Asteroids = window.Asteroids;
  //
  // if (typeof window.Asteroids.game === 'undefined') {
  //   Asteroids.game = {};
  // }

  var DIM_X = 800;
  var DIM_Y = 600;
  var NUM_ASTEROIDS = 100;

  window.Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  window.Asteroids.Game.prototype.addAsteroids = function() {
    var that = this;
    for(var i = 0; i < NUM_ASTEROIDS; i++) {
      var newAsteroid = new window.Asteroids.Asteroid(that, window.Asteroids.Game.randomPosition());
      that.asteroids.push(newAsteroid);
    }

  };

  window.Asteroids.Game.randomPosition = function() {

    var x = DIM_X * Math.random();
    var y = DIM_Y * Math.random();
    return {pos: [x, y]};
  };

  window.Asteroids.Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(function(el) {
      el.draw(ctx);
    });
  };

  window.Asteroids.Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(el) {
      el.move();
    });
  };

  window.Asteroids.Game.prototype.wrap = function(pos) {
    if (pos[0] >= DIM_X) {
      pos[0] = 0;
    } else if (pos[0] < 0) {
      pos[0] = DIM_X;
    }
    if (pos[1] > DIM_Y) {
      pos[1] = 0;
    } else if (pos[1] < 0) {
      pos[1] = DIM_Y;
    }
    return pos
  };


})();
