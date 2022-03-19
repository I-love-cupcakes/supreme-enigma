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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });


    document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "index.html";
}