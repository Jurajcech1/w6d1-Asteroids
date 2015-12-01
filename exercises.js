function sum() {
  var nums = [].slice.call(arguments);
  var theSum = 0;
  nums.forEach(function(el) {
    theSum += el;
  });
  return theSum;
}


// console.log(sum(1,2,3));




// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound) {
//   console.log(this.name + " says " + sound + "!");
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow");
// // Markov says meow!
//
// markov.says.myBind(breakfast, "meow")();
// // Breakfast says meow!
//
// markov.says.myBind(breakfast)("meow");
// // Breakfast says meow!
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow");
// // Breakfast says meow!

Function.prototype.myBind = function (context) {
  var that = this;
  var args1 = [].slice.call(arguments);
  return function() {
    var args2 = [].slice.call(arguments);
    var args = args1.slice(1).concat(args2);
    that.apply(context, args);
  };
};

function curriedSum(numArgs) {
  var numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var theSum = 0;
      numbers.forEach(function(el) {
        theSum += el;
      });
      return theSum;
    }
    else {
      return _curriedSum;
    }
  };
}

// var sumtest = curriedSum(4);
// console.log(sumtest(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  var numbers = [];
  var that = this;
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return that.apply(null, numbers);
    }
    else {
      return _curriedSum;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree.curry(3)(4)(20)(6)); // == 30


Function.prototype.inherits = function(superClass) {
  function Surrogate () {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate;
  this.prototype.constructor = this;
};


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.test = function() {
  console.log("test");
};

Asteroid.prototype.otherTest = function() {
  console.log("other test");
};

var ma = new MovingObject();
var ast = new Asteroid();

ma.test();
// ma.otherTest();
ast.test();
ast.otherTest();
