// let exercise=document.getElementById("ex");
var spd = 250;
var cnt = 0;
var text = '';
var splittedArray = [];
var interval;
function funcName() {
    document.getElementById("stopbtn").onclick = stopClick;
    document.getElementById("animation-option").onchange = exClick;
    document.getElementById("startbtn").onclick = startClick;
    document.getElementById("size").onclick = sizeClick;
    document.getElementById("check").onclick = speedClick;


}
function exClick() {
    // var exercise=document.getElementById("animation-option");
    text = ANIMATIONS[this.value];
    document.getElementById("txt").value = text;


}
function startClick() {
    splittedArray = text.split("=====\n");

    interval =
        setInterval(function () {
            if (cnt >= splittedArray.length) {
                cnt = 0;
            }
            document.getElementById("txt").value = splittedArray[cnt];
            cnt++;

        }, spd)
    document.getElementById('animation-option').disabled = true;
    document.getElementById('startbtn').disabled = true;
    document.getElementById('stopbtn').disabled = false;
}
function stopClick() {
    clearInterval(interval);
    document.getElementById("txt").value = text;
    document.getElementById('animation-option').disabled = false;
    document.getElementById('startbtn').disabled = false;
    document.getElementById('stopbtn').disabled = true;
}

function sizeClick() {
    var txtBox = document.getElementById("txt")
    txtBox.style.fontSize = this.value + "pt";
}
function speedClick() {
    clearInterval(interval);
    if (this.checked == true) {
        spd = 50;
    }
    else {
        spd = 250;
    }
    if (splittedArray.length > 0) {
        interval =
            setInterval(function () {
                if (cnt >= splittedArray.length) {
                    cnt = 0;
                }
                document.getElementById("txt").value = splittedArray[cnt];
                cnt++;

            }, spd)
    }

}
window.onload=funcName;


