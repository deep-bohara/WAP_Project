
// (function(){
// // function sizechanger(size) {
// //     alert("hello");
// //         return function () {
// //             document.body.style.fontsize = size + "px";
// //         }
// //     }
// // document.getElementById("size-12").onclick = sizechanger(12);;
// // document.getElementById("size-14").onclick = sizechanger(14);;
// // document.getElementyId("size-18").onclick = sizechanger(16);;
// function makeSizer (size) {
// return function () {
// document.body.style.fontSize= size + 'px';
// };
// }
// document.getElementById('size-12').onclick = makeSizer(12);
// document.getElementById('size-14'). onclick = makeSizer(14);
// document.getElementById('size-18').onclick = makeSizer(18);

// })();


// window.onload=init();
// var counter = (function () {
//     var privateCounter = 0; //private data
//     function changeBy(val) { //private inner function
//         privateCounter += val;
//     }
//     return
//     { // three public functions are closures
//         increment:function(){ changeBy(1); }
//         decrement:function() { changeBy(-1); }
//         value:function () { return privateCounter; }
//     }
// })();
// alert(counter.value()); 
// counter.increment ();
// counter.increment ();
// alert(counter.value ()); 
// counter.decrement ();
// alert(counter.value ()); 

// $(function(){
//     alert("Popup");
//     $("#textbox").mouseout(sayHi);
//     $("#btn").click(sayHi);

// });
// function sayHi(){
//     this.value="sayHi";
// }
$(function(){
    alert("Clicked");

    $("body, div,p,em").click(hello);
});
function hello(){
    
    alert("Good luck!You clicked in"+this.nodName);
}