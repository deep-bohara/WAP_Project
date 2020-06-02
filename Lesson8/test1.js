

(function(){
    "use strict";
var init=function () {
    document.getElementById("start1").onclick=start1;
    
}
var bicyclePrototype,mountainBikePrototype;

var createBicyclePrototype = function () {

    {
        return {

            speed: 0,
            applyBrake: function (decr) {
                this.speed -= decr;
            },
            speedup: function (incr) {
                this.speed += incr;
            }
        }

    }
}
   
    var createMountainBikePrototype = function (proto) {
        var obj = Object.create(proto);

        obj.gear = 1;
        obj.setGear = function (gr) {
            this.gear = gr;
        }
        return obj;
    }

    // console.log(createMountainBikePrototype.setGear(20));

    const start1 = function () {
        bicyclePrototype = createBicyclePrototype();

        mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        bicyclePrototype.speedup(10);
        mountainBikePrototype.speedup(5);
        console.log(bicyclePrototype.hasOwnProperty('speed'));
        console.log(mountainBikePrototype.speed);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.hasOwnProperty('speed'));
        mountainBikePrototype.speedup(5);
        console.log(bicyclePrototype.speed);
        console.log(mountainBikePrototype.speed);
        console.log(mountainBikePrototype.hasOwnProperty('speed'));
    }
    window.onload=init;

})();








