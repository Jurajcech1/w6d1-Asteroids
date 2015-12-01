(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
var Asteroids = window.Asteroids;

if (typeof window.Asteroids.util === 'undefined') {
  Asteroids.util = {};
}


window.Asteroids.util.inherits = function(childClass, parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate;
  childClass.prototype.constructor = childClass;
};

window.Asteroids.util.randomVec = function(length) {
  var dx = length*((Math.random() * 2) - 1);
  var dy = length*((Math.random() * 2) - 1);
  return [dx, dy];
};
})();
