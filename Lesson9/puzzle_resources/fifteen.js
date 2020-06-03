$(function () {
    alert("Hello");
    var imgurl = "background.jpg";
    // $("body").css("background-img", "url(" + imgurl + ")");
    $("#shufflebutton").click(shuffle);

      function shuffle() {
        puzzlearea = $("puzzlearea");
        divs = $("div");
        var i = 0;
        $("div").each(function () {
            div = this.divs;

            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            $("#puzzlearea").addClass("puzzlepiece");
            $("#div").css({
                "left": x + "px",
                "top": y + "px",
                "background-image": "url(" + background.jpg + ")",
                "background-position": -x + "px" + (-y) + "px"
            });
            // var div;
            // $(div.x).val(x);
            // $(div.y).value(y);
            div.x=x;
            div.y=y;
            i++;
        });
    }
});

// init = function() {
//     var puzzleArea = document.getElementById('puzzlearea');
//     var divs = puzzleArea.getElementsByTagName("div");

//     // initialize each piece
//     for (var i=0; i< divs.length; i++) {
//         var div = divs[i];

//         // calculate x and y for this piece
//         var x = ((i % 4) * 100) ;
//         var y = (Math.floor(i / 4) * 100) ;

//         // set basic style and background
//         div.className = "puzzlepiece";
//         div.style.left = x + 'px';
//         div.style.top = y + 'px';
//         div.style.backgroundImage = 'url("background.jpg")';
//         div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

//         // store x and y for later
//         div.x = x;
//         div.y = y; 
//     }        
// };
// */