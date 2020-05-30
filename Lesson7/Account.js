var accountInfoList = [];

var accountModule = (function () {
    var privateMethodCreateAccount = function () {

        acName = document.getElementById("ac").value;
        bal = document.getElementById("dep").value;
        accountInfoList.push({
            acName: acName,
            bal: bal

        });
     
    }

    return {
        createAcc: privateMethodCreateAccount
    };
})()

function pageLoad() {
    document.getElementById("btn").onclick = function () {
        accountModule.createAcc();
        display();
    }


}
function display() {

    nam = document.getElementById("ac").value;
    bal = document.getElementById("dep").value;
    // info=document.getElementById("acinfo");
    document.getElementById("acinfo").value += "\nAccount Name:" + nam + " " + "Balance:" + bal;
}

window.onload = pageLoad;