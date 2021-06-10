
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDnOFBktLuzVIy2JXMkX-e_r9663pCFJFY",
  authDomain: "kwitter-35203.firebaseapp.com",
  databaseURL: "https://kwitter-35203-default-rtdb.firebaseio.com",
  projectId: "kwitter-35203",
  storageBucket: "kwitter-35203.appspot.com",
  messagingSenderId: "982407194628",
  appId: "1:982407194628:web:1f4cee3ca24724510a2d51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
   purpose : "adding user"   
 });
}