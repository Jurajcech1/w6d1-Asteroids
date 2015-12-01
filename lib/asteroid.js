(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
var Asteroids = window.Asteroids;


window.Asteroids.Asteroid = function(game, posObj) {
  posObj.color = 'red';
  posObj.radius = '5';
  posObj.vel = window.Asteroids.util.randomVec(10);
  posObj.game = game;
  window.Asteroids.MovingObject.call(this, posObj);

};

window.Asteroids.util.inherits(window.Asteroids.Asteroid, window.Asteroids.MovingObject);

window.Asteroids.na = new window.Asteroids.Asteroid({ pos: [50, 50] });
})();
