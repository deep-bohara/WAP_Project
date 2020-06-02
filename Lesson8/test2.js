

(function(){
    "use strict";

    var initial=function () {
        document.getElementById("start2").onclick=start;
        
    }
    function Bike(){
        this.speed=0;
    };
    Bike.prototype.applyBrake=function(decr){
        this.speed-=decr;
    };
    Bike.prototype.speedup=function(incr){
        this.speed+=incr;
    };
    function MountainBike(){
        Bike.call(this);
        this.gear=1;
    };
    MountainBike.prototype=Object.create(Bike.prototype);
    MountainBike.prototype.constructor=MountainBike;
    MountainBike.prototype.setGear=function(gear){
        this.gear=gear;
    }

    var start=function(){
        var bike=new Bike();
        console.log(bike);
        var mountainBike=new MountainBike();
        console.log(mountainBike);
        mountainBike.speedup(10);
        mountainBike.speedup(20);
        console.log(mountainBike.speed);
        console.log(mountainBike.gear);
        console.log(mountainBike instanceof MountainBike);
        console.log(mountainBike instanceof Bike);
        console.log(mountainBike.constructor);
    };
    window.onload=initial;
})();











