var firebaseConfig = {
    apiKey: "AIzaSyCAyTtEO0EqmWH9SN_2gqeFO0nfTC0c270",
    authDomain: "kwitter-d53ad.firebaseapp.com",
    databaseURL: "https://kwitter-d53ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-d53ad",
    storageBucket: "kwitter-d53ad.appspot.com",
    messagingSenderId: "246736766878",
    appId: "1:246736766878:web:3daee1a45747229e62f88f",
    measurementId: "G-2Z334BQKQN"
  };

  firebase.intializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();