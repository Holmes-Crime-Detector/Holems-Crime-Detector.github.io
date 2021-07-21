
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
       

         function forget()
         {
            window.alert("working");
            const auth = firebase.auth();
            var email = document.getElementById("email").value;
            window.alert(email);
            if (email != " ") 
            {
                auth.sendPasswordResetEmail(email).then(function()=>
                {
                    window.alert("Email has been sent to you, Please check and verify.");
                })
                .catch(function(error)=>
                {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    window.alert("Message : " + errorMessage );
                });

            }
            else
            {
                window.alert("Please write your email first.");
            }

         }

      

