
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB_iSxvW7U5cVASQfbompcf42FB1n8_kqc",
    authDomain: "signup-b5bd8.firebaseapp.com",
    projectId: "signup-b5bd8",
    storageBucket: "signup-b5bd8.appspot.com",
    messagingSenderId: "338020653499",
    appId: "1:338020653499:web:aaf29067f8aad0e39a4c9e",
    measurementId: "G-KEN7DQ5J6P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
        function signUp(){
                var email = document.getElementById("email");
                var password = document.getElementById("password");

                const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
                promise.catch(e => alert(e.message));
                alert("Signed Up");

        }



  auth.onAuthStateChanged(function(user){
               if(user){
                    var email = user.email;
                      alert("Active User " + email);
                        //Take user to a different or home page
                        //is signed in
               }else{
                        alert("No Active User");
                        //no user is signed in
                }   

        });