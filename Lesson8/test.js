// var a ={
// x : 10,
// y:100,
// calculate:function (z){
// return this.x + this.y +z;
// }
// };
// var b ={
// y : 20,
// __proto__: a
// };
// var c ={
// y : 30,
// __proto__: a
// };
// // call the inherited method
// console.log(b.calculate (30)); // 60
// console.log(c.calculate (40));

// ============================================
// var person={
// first:'Default',
// last:'Default',
// greet:function (){ return 'Hi'+ this.first ; }//use this in functions
// }
// var jim=Object.create (person);
// console.log(jim ['first']); // Default Inheritance
// console.log(jim.hasOwnProperty ('first')); // false
// jim.first='jim';
// console.log(jim.hasOwnProperty ('first')); // true
// console.log(jim ); // {first: 'Jim'} No last & greet()
// jim.greet (); // Hi Jim

// ==============================================

// var student={
// name:"Jim",
// course:"WAP",
// no:12
// };
// for(var key in student){
// console.log (key ); // name, course, no
// }
// console.log(Object.keys(student )) // [name, course,
// stu=Object.create (student);
// console.log(stu.name );// Jim Carrey
// for(var key in stu){
// console.log(key); // name, course, no
// }
// console.log(Object.keys (stu ));
// delete student.no;
// console.log(student);
// ======================================================

// function Person (name,age){
// this.name =name;
// this.age =age;
// this.income = 0;
// }
// const person1 = new Person(" Sally", 23);
// console.log(person1);
// person1.income =1000;
// console.log(person1);

var createBicyclePrototype = {

    speed: 0,
    applyBrake: function (decr) {
        return this.speed - decr;
    },
    speedup: function (incr) {
        return this.speed += incr;
    }

}
console.log(createBicyclePrototype.applyBrake(10));
console.log(createBicyclePrototype.speedup(30));
console.log(createBicyclePrototype);
// console.log(Object.create(createBicyclePrototype));

var createMountainBikePrototype = Object.create(createBicyclePrototype);
createMountainBikePrototype =
{
    gear: 1,
    setGear: function (gr) {
        this.gear = gr;
        return this.gear;
    }
    //  
}

console.log(createMountainBikePrototype.setGear(20));

var start = {
    first: function () { bicyclePrototype: Object.create(createBicyclePrototype) },
    second: function () { mountainBikePrototype: Object.create(createMountainBikePrototype(bicyclePrototype)) },
    result: function () {
        return {
            bicyclePrototype: bicyclePrototype,
            mountainBikePrototype: mountainBikePrototype
        }
    }

};
console.log(start.bicyclePrototype);
console.log(start.mountainBikePrototype);

console.log(start.result);