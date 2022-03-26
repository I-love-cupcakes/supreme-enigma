
var firebaseConfig = {
      apiKey: "AIzaSyCPbl21Sv5py6M1PdQ2x8mZ5gOyb53PCHY",
      authDomain: "kwitter-chat-room.firebaseapp.com",
      databaseURL: "https://kwitter-chat-room-default-rtdb.firebaseio.com",
      projectId: "kwitter-chat-room",
      storageBucket: "kwitter-chat-room.appspot.com",
      messagingSenderId: "371291533812",
      appId: "1:371291533812:web:08778ea66327da034fc9a1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name:" + Room_names);
      row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += room; 
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}