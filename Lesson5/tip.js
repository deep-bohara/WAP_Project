
function calcTip() {
	var subtotalElem = document.getElementById("subtotal");
	var tipElem = document.getElementById("tip");
	var totalElem = document.getElementById('total');
	var subtotal = subtotalElem;
	var tip = subtotalElem*tipElem*0.01;
	var total = subtotal+tip;
    totalElem.innerHTML = '$' + total;
    // total.value=total;
}

// document.getElementById("total").style.display = "block";
//   document.getElementById("total").innerHTML = total;