
function alertMsg() {
    // alert("Hello, world!");
    var text = document.getElementById('txt');
    // text = text.style.fontSize = "2em";

    var fontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    // px to pt
    fontSizeval = parseInt(parseInt(fontSize) * 0.75);
    var interval = setInterval(function () {
        if (fontSizeval > 32)
            clearInterval(interval);
        else {
            fontSizeval = parseInt(fontSizeval) + 2;
            text.style.fontSize = fontSizeval + 'pt';
        }



    }, 500);


}
function check() {

    var text = document.getElementById('txt');
    if (document.getElementById('chk').checked == true) {
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration="none";
    }

    // text.style.fontWeight="bold";
}