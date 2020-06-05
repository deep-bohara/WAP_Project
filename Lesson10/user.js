$(function () {
    var url = "http://jsonplaceholder.typicode.com";


    $("#user-form").on("submit", function (e) {
        var userid = $(this).find('[name="userid"]').val();
        // alert(userid);
        fetch(`${url}/users/${userid}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {

                $('#user-info-name').text(myJson.name);
                $('#user-info-email').text(myJson.email);
                $('#user-info-address').text(myJson.address.street + ", " + myJson.address.suite + " ," + myJson.address.city + ", " + myJson.address.zipcode);

            })
        e.preventDefault();

    });

    $("#pbtn").on("click", function (e) {
        var userid = $("#user-form").find('[name="userid"]').val();
        // alert(userid);
        fetch(`${url}/posts?userid=${userid}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (posts) {
                $('#user-post').text('');
                for(key in posts){
                    var  single_post = posts[key];
                    var post_container = $('<div class="post-container">');
                    var title = $('<h3>').text(single_post.title);
                    var body = $('<p>').text(single_post.body);
                    var commentBtn = $('<button>').addClass('comment-btn').val(single_post.id).text('Viw Comment..');
                    var commentBox = $('<div>').addClass('comment-box');
                    
                    post_container.append(title);
                    post_container.append(body);
                    post_container.append(commentBtn);
                    post_container.append(commentBox);

                    $('#user-post').append(post_container);
                }
                $('.comment-btn').on('click',function(e){
                    alert('kkk');
                })
               
            })


    })
   
    // $(document).on('click','.comment-btn',function(e){
    //     alert('kkk');
    // })


})



    // 









// let url='http://jsonplaceholder.typicode.com';
// let data={username:'deepak'};
// fetch(url,{
// method:'POST',
// body:JSON.stringify(data),
// headers:{
// 'content-type':'application/json'
// }

// })