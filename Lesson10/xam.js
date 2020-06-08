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

// ======================================================================

// function data() {
//     var start = document.getElementById("btn");
//     start.onclick = function () {
//         // alert("Inside");
//         var fname = document.getElementById("fname").value;
//         var lname = document.getElementById("lname").value;
//         var age = document.getElementById("age").value;
//         var table = document.getElementsByTagName("table")[0];

//         var row = table.insertRow(table.rows.length);
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);


//         cell1.innerHTML = fname;
//         cell2.innerHTML = lname;
//         cell3.innerHTML = age;


//     }
// };


//     window.onload = data;


// =========================================================

// $(function(){

//     $('#btn').click(function(){
//         // alert("Hello");
//         // var _fname=$('input[name="fname"]').val();
//         var _fname=$('#fname').val();
//         // alert(_fname);
//         var _lname=$('#lname').val();
//         var _age=$('#age').val();

//         var tr='<tr><td>'+_fname+'</td>  <td>'+_lname+'</td>   <td>'+_age+'</td></tr>';
//         $('table').append(tr);




//     })




// });

// =============================================


$(function(){

    $("#form").submit(validate);


    $('#btn').submit(function(){
        // alert("Hello");
        // var _fname=$('input[name="fname"]').val();
        var _fname=$('#fname').val();
        // alert(_fname);
        var _lname=$('#lname').val();
        var _phn=$('#phn').val();

        // $("th").each(function(index,element){
        //     alert(index+":"+$(element).text());
        // });

        var tr='<tr><td>'+_fname+'</td>  <td>'+_lname+'</td>   <td>'+_phn+'</td></tr>';
        $('table').append(tr);




    });
    function validate(e){
        if($("#fname").val()==""||$("#lname").val()==""||$("#fname").val().length<2){
            alert("Error,invalid input!");
            event.preventDefault();
        }


    }




// });
// =================================
// $(function(){
//     $("#textbox").onmouseout(sayHi);
//     $("#btn").click(sayHi);
// });
// function sayHi(){
//     this.value="SAYHI";
// }













