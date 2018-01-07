var token = "";
var userId = "";

window.fbAsyncInit = function() {
    FB.init({
        appId: '223495184860470', //'259763817525266',
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });
    FB.Event.subscribe('auth.authResponseChange', function(response) {
        console.log(response);
        //logout-unauthen
        if (response.authResponse == null | response.status == "unknow") {
            return;
        }
        token = response.authResponse.accessToken;
        userId = response.authResponse.userID;
        console.log("token:::" + token);
        console.log("userID::" + userId);

        if (response.status === 'connected') {
            enableAPI();
        } else if (response.status === 'not_authorized') {
            FB.login(function() { scope: 'publish_actions' });
        } else {
            FB.login(function() { scope: 'publish_actions' });
        }
    });
};

// Load the SDK asynchronously
(function(d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { console.log(7); return; }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

function enableAPI() {
    console.log('Welcome!  Fetching your information.... ');
    getLoginProfile();
    document.getElementById("postBtn").onclick = postMe;
    document.getElementById("postDeleteBtn").onclick = deletePost;
    document.getElementById("commentBtn").onclick = commentMe;
    document.getElementById("commentUpdateBtn").onclick = updateCommentMe;
    document.getElementById("commentDeleteBtn").onclick = deleteCommentMe;

}
var loginProfile = {};

function getLoginProfile() {
    FB.api('/me', 'get', function(response) {
        FB.api('/me', function(response) {
            console.log("--------login profile-------");
            console.log(response);
            loginProfile = response;
        });
    });
}

var lastPostId = "";
var lastCommentId = "";

function postMe() {
    console.log("-------post topic--------");
    var _message = document.getElementById("postText").value;
    FB.api('/me/feed', 'post', { message: _message, privacy: { "value": "SELF" } }, function(response) {
        console.log(response);
        lastPostId = response.id;
        document.getElementById("lastPostId").value = lastPostId;
        document.getElementById("lblCmnToPostId").innerText = lastPostId;
    });
}

function deletePost() {
    console.log("-------delete post--------");
    FB.api('/' + lastPostId, 'delete', function(response) {
        console.log(response);
        lastPostId = "";
        document.getElementById("lastPostId").value = lastPostId;
    });
}

function commentMe() {
    console.log("-------post comment--------");
    var _message = document.getElementById("commentText").value;
    console.log("comment to post-id:" + lastPostId);
    FB.api('/' + lastPostId + '/comments', 'post', { message: _message }, function(response) {
        console.log(response);
        if (response && !response.error) {
            lastCommentId = response.id;
            document.getElementById("lastCommentId").value = lastCommentId;
            console.log("get comment id:" + lastCommentId);
        } else {

        }
    });
}

function updateCommentMe() {
    console.log("-------update comment--------");
    var _message = document.getElementById("commentText").value;
    lastCommentId = document.getElementById("lastCommentId").value;
    console.log("update comment:" + lastCommentId);
    FB.api('/' + lastCommentId, 'post', { message: _message }, function(response) {
        console.log(response);
        if (response && !response.error) {
            /* handle the result */
        } else {

        }
    });
}

function deleteCommentMe() {
    console.log("-------delete comment--------");
    var _message = document.getElementById("commentText").value;
    lastCommentId = document.getElementById("lastCommentId").value;
    console.log("delete comment:" + lastCommentId);
    FB.api('/' + lastCommentId, 'delete', function(response) {
        console.log(response);
        if (response && !response.error) {
            lastCommentId = "";
            document.getElementById("lastCommentId").value = lastCommentId;
        } else {

        }
    });
}