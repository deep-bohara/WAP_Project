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

    var displayComments = function (commentBtn, comments) {
        var commentContainer = $(commentBtn).parents('.post-container').find('.comment-box');
        for (var key in comments) {
            var singleComment = comments[key];
            var body = $('<p>').text(singleComment.body);
            var commentedBy = $('<p>').text(`Commnted By: ${singleComment.name}`);
            commentContainer.append(body)
            commentContainer.append(commentedBy)
        }
    }

    $(document).on('click', '.comment-btn', function (e) {
        var postId = $(this).parents('.post-container').attr('data-key');

        fetch(`${url}/comments?postId=${postId}`)
            .then(function (resp) {
                return resp.json();
            }).then(comments => displayComments(this, comments));
    })

    $("#pbtn").on("click", function (e) {
        var userid = $("#user-form").find('[name="userid"]').val();
        // alert(userid);
        fetch(`${url}/posts?userid=${userid}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (posts) {
                $('#user-post').text('');
                for (key in posts) {
                    var single_post = posts[key];
                    single_post.id = parseInt(single_post.id);
                    var post_container = $(`<div class="post-container" data-key="${single_post.id}">`);
                    var title = $('<h3>').text(single_post.title);
                    var body = $('<p>').text(single_post.body);
                    var commentBtn = $('<button>').addClass('comment-btn').val(single_post.id).text('View Comment..');
                    var commentBox = $('<div>').addClass('comment-box');

                    post_container.append(title);
                    post_container.append(body);
                    post_container.append(commentBtn);
                    post_container.append(commentBox);

                    $('#user-post').append(post_container);
                }
                // $('document').on('click', '.comment-btn', function (e) {
                //     // alert('kkk');

                //     var postid = $("this").parents('.single_post').attr('data-key');
                //     alert(postid);
                //     var single_post = posts[key].postId;

                //     fetch(`${url}/comments?postId=${single_post}`)
                //         .then(function (response) {
                //             return response.json;
                //         })
                //         .then(function (comments) {
                //             $('#comment-box').text('');
                //             for (key in comments) {
                //                 var single_comment = comments[key];
                //                 var name = $('<h2>').text(single_comment.name);
                //                 var email = $('<p>').text(single_comment.email);
                //                 var body = $('<h2>').text(single_comment.body);

                //                 post_container.append(name);
                //                 post_container.append(email);
                //                 post_container.append(body);

                //                 $('.comment-box').append(post_container);


                //             }


                //         })
                //     // alert(single_post);

                // })

            })


    })

    // $(document).on('click','.comment-btn',function(e){
    //     alert('kkk');
    // })


})



     









