// $(function(){
//     alert("Clicked");

//     $("body, div,p,em").click(hello);
// });
// function hello(e){

//     alert("Good luck!You clicked in"+this.nodeName);
//     e.stopPropagation();
// }

// $(function(){
//     $("#btn").click(function(){
//         var fname=document.getElementById("fname").value;
// var lname=document.getElementById("lname").value;
// var age=document.getElementById("age").value;
//  var table=document.getElementsByTagName("table")[0];

//  var row=table.insertRow(1);
//  var cell1=row.insertCell(0);
//  var cell2=row.insertCell(1);
//  var cell3=row.insertCell(2);

// var fname=document.getElementById("fname").value;
//  cell1.innerHML=fname;
//  cell2.innerHML=lname;
//  cell3.innerHML=age;

//     });

// });




// alert("Hello");

function data() {
    var start = document.getElementById("btn");
    start.onclick = function () {
        // alert("Inside");
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var age = document.getElementById("age").value;
        var table = document.getElementsByTagName("table")[0];

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);


        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;


    }
};


    window.onload = data;













