// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZ5jn4Ev4oB-4Ki-5sVWWJCNqxXJraUow",
  authDomain: "facebook-authentication-4cf4f.firebaseapp.com",
  databaseURL: "https://facebook-authentication-4cf4f.firebaseio.com",
  projectId: "facebook-authentication-4cf4f",
  storageBucket: "facebook-authentication-4cf4f.appspot.com",
  messagingSenderId: "68374070922"
};
firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();

//from facebook
window.fbAsyncInit = function () {
  FB.init({
    appId: '2000417906887093',
    cookie: true,
    xfbml: true,
    version: 'v2.12'
  });

  FB.getLoginStatus(function (response) {
    // console.log(response);
    statusChangeCallback(response);
    // console.log(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// sign into facebook
// !George changed the id to match the modal button id
document.getElementById("facebookLogInButton").onclick = function () {
  //firebase sign in stuff
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...

    // !George commented out these lines for testing
    // console.log("hi, " + user.displayName);
    // console.log(user);
    // console.log("the user facebook token is " + token);

    // George's added code starts here
    // ...
    // console.log(result);
    var profile = result.additionalUserInfo.profile;
    // console.log(profile);

    var newUser = {
      firstName: profile.first_name,
      lastName: profile.last_name,
      photo: profile.picture.data.url,
      age: profile.age_range.min,
      gender: profile.gender,
      location: "Charlotte, NC",
    }

    $.post("/api/owner", newUser)
      .then(function (data) {
        console.log(data);
      });

    $("#profilePicture").html("<img id='profile picture' src='" + newUser.photo + "'/>");
    $("#userGreeting").html("Glad to have you, " + newUser.firstName + "!");


    // George's code ends here
    // ...

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
    // ...
  });
}

//sign out of facebook
document.getElementById("facebookSignOutButton").onclick = function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    // alert("sign out successful");
    $("#profilePicture").html("You have signed out");
    $("#userGreeting").html("come back soon!");
    console.log("sign out successful");

  }).catch(function (error) {
    // An error happened.
  });
};

function statusChangeCallback(response) {
  console.log(response);
  // if (response.status === "connected") {
  //   console.log("you are logged in");
  //   $("#facebookLoginModal").modal('hide');
  // } else {
  //   console.log("not authenticated");
  //   $("#facebookLoginModal").modal('show');
  // }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
  console.log(response.status)
}

// Show Facebook log-in modal
$("#facebookLoginModal").modal('show');
