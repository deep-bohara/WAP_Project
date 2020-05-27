
function calcTip() {
	var subtotalElem = document.getElementById('subtotal').value;
	var tipElem = document.getElementById('tip').value;
	var totalElem = document.getElementById('total');
	var subtotal = subtotalElem;
	var tip = subtotal*0.01*tipElem;
	var total = subtotal+tip;
	totalElem.innerHTML = '$' +tip;
}

