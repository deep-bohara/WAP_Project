var nam='';
var bal=0;
// var info='';

function pageLoad(){
document.getElementById("btn").onclick=display;

}
function display(){
   
 nam=document.getElementById("ac").value;
bal=document.getElementById("dep").value;
// info=document.getElementById("acinfo");
document.getElementById("acinfo").value="Account Name:"+nam+" "+"Balance:"+bal;
}

window.onload=pageLoad;