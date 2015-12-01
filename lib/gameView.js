(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  window.Asteroids.GameView = function() {
    this.game = new window.Asteroids.Game();
    this.ctx = ctx;
  };

  window.Asteroids.GameView.prototype.start = function() {
    var that = this;
    setInterval(function() {
      that.game.moveObjects();
      that.game.draw(ctx);
    }, 20);
  };

})();
