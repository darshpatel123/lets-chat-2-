

   var firebaseConfig = {
      apiKey: "AIzaSyDFLN-fino0vFj9GwAW-Hjs5_Prq8FCFIg",
      authDomain: "let-s-chat-15d11.firebaseapp.com",
      databaseURL: "https://let-s-chat-15d11-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-15d11",
      storageBucket: "let-s-chat-15d11.appspot.com",
      messagingSenderId: "623424172352",
      appId: "1:623424172352:web:06dd93f696755a4ae08aa5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";

}
function addroom(){
      room=document.getElementById("room_id").value;
      firebase.database().ref("/").child("room").update({
          room:room
      });
}