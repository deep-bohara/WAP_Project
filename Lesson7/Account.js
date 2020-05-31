var accountInfoList = [];

var accountModule = (function () {
    var privateMethodCreateAccount = function () {

        acName = document.getElementById("ac").value;
        console.log(acName);
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
    document.getElementById("btn").onsubmit = function () {
        accountModule.createAcc();
        display();
        return false;
    }


}
function display() {
    document.getElementById("acinfo").value="";
    for(const acInfo of accountInfoList) {
        document.getElementById("acinfo").value+= "\nAccount Name:" + acInfo.acName + " " + "Balance:" +acInfo.bal;
// console.log(acInfo);
}

    // nam = document.getElementById("ac").value;
    // bal = document.getElementById("dep").value;
    // // info=document.getElementById("acinfo");
    // document.getElementById("acinfo").value += "\nAccount Name:" + nam + " " + "Balance:" + bal;
}

window.onload = pageLoad;