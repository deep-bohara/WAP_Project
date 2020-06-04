// var protoobj={x:5,y:7,z:9};
// var myobj1=Object.create(p);
// console.log(myobj1.x);
// var myobj2=Object.create(p);
// myobj2.x=0;
// console.log(myobj2.x);
// delete myobj1.y;
// console.log(myobj2.y);
// console.log(myobj1.y);
// console.log(protoobj.y);
// delete protoobj.z;
// console.log(myobj2.z);
// console.log(myobj1.z);
// console.log(protoobj.z);
// ===================

// function f(bar) {
//     this.count = 0;
//     this.bar = bar;
// }
// var obj1 = new f(5);
// console.log(obj1.count);
// obj1.increment();

// f.prototype.increment = function () {
//     this.count++;

// };
// obj1.increment();
// console.log(obj1.count);
// var obj2 = new f(10);
// console.log(obj2.count);
// obj2.increment();
// console.log(obj2.count);
// ==========================================

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
