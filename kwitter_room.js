
//ADD YOUR FIREBASE LINKS HERE
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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
});
localStorage.setItem("room_name", room_name);
windows.location = "kwitter_page.html";
}

function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
      
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";      
}

