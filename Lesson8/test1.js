

(function(){
    "use strict";
var init=function () {

    // var allp=document.querySelectorAll("p");
    // for(var i=0;i<allp.length;i++){
    // allp[i].style.backgroundColor="yellow";
    // }
    
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
// =================================================Testing=================


// $(function(){
//     // alert("Hello");
//     // $("#start1").on('click',function(){
//     //     $("#p").css("background-color","red");
    
//     // })
//     // $("p").css("background-color","yellow");
//     $("p").each(function(){
//         $(this).css("background-color","green");
//         $(this).css("text-align","center");

//     })
//     var newHeading=document.createElement("h1");
//     newHeading.innerHTML="This  is a heading";
//     newHeading.style.color="red";
//     // document.getElementById("start1").appendChild(newHeading);
//     document.getElementById("start2").append(newHeading);


    
// });

// window.onload=init;





