
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCQwdLxCDAV-21fQ2bskaWvH0AjYedc0II",
      authDomain: "kiwinsta-17463.firebaseapp.com",
      databaseURL: "https://kiwinsta-17463-default-rtdb.firebaseio.com",
      projectId: "kiwinsta-17463",
      storageBucket: "kiwinsta-17463.appspot.com",
      messagingSenderId: "321301904567",
      appId: "1:321301904567:web:32784f8045b91de7946132"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name1=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name1+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
