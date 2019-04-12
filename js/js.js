function adduser() {
    alert("adding user!");
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function (error) {
        // Handle Errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error" + error.message);
        //...
    });
}

function signIn(){
    alert("Signing In");

    var email= document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert("Error signing in");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}


function signOut(){
    firebase.auth().signOut().then(function() {
        alert("Signed out!");
    }).catch(function(error) {
        // An error happened.
    });
}



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        console.log(user.toJSON());
    } else {
        // No user is signed in.
        alert("user not signed in");
    }
});





function likeplus(){
    document.getElementById('thread1').innerHTML = 1
}



var storage = firebase.storage();

////////////// Will



/////////////
