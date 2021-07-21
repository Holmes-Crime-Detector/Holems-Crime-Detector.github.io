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
//Reference messages collection
var messagesRef = firebase.database().ref('messages');
const auth = firebase.auth();



//Liten for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
//Submit Form
function submitForm(e) {
	e.preventDefault();
	//Get values
	var user= getInputVal('user');
	var email= getInputVal('email');
	var password= getInputVal('password');
	var cpassword= getInputVal('cpassword');
	//Save Message
	saveMessage(user,email,password,cpassword);
}

function getInputVal(id){
	return document.getElementsById(id).value;
}

//Save messages to firebase
function saveMessage(user,email,password,cpassword){
	var newMessageRef= messagesRef.push();
	newMessageRef.set({
		user:user,
		email:email,
		password:password,
		cpassword:cpassword
	});
}