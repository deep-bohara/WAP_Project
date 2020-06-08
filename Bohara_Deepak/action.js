$(function () {
    "use restrict";
    var row = 0;
    
    var formValidate = function () {
        $(".err_msg").html('');
        var fname = $("#first_name").val();
        var lname = $("#last_name").val();
        var phn = $("#phone").val();
        var error = false;
        if (!fname||!lname||!phn) {
            $(".err_msg").append("Field(s) shouldnot be empty!<br/>");
            error=true;
        }
        
        if (error == false) {
            return {
                fname: fname,
                lname: lname,
                phn: phn
            };
        }
        else {
            return false;

        }
    }

    $('#btn_add').on('click', function (e) {
        var valResult = formValidate();

        if (valResult !== false) {

            if (row === 0) {
                let nwhtml = `<tr>`;
                nwhtml += `<td>${valResult.fname}</td>`;
                nwhtml += `<td>${valResult.lname}</td>`;
                nwhtml += `<td>${valResult.phn}</td>`;
                nwhtml += `<td><a class="btn btn-delete" href="#">Delete</a></td>`;
                nwhtml += `</tr>`;
                $('#contacts').append(nwhtml);

            } else {

                var rSelected = $('#contacts').find(`tr:nth-child(${row + 1})`);
                console.log(rSelected);
                rSelected.find('td:nth-child(1)').text(valResult.fname);
                rSelected.find('td:nth-child(2)').text(valResult.lname);
                rSelected.find('td:nth-child(3)').text(valResult.phn);
                row = 0;
            }

        }
        e.preventDefault();
    })
    $(document).on('click', '.btn-delete', function (e) {
        $(this).parents('tr').remove();
        e.preventDefault();
    })
   
})