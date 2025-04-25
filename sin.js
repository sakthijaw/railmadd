
  const firebaseConfig = {
    apiKey: "AIzaSyCQ1GNOcu8zjGAd_56k5gzo4JSh9INd9nI",
    authDomain: "railmadluis.firebaseapp.com",
    databaseURL: "https://railmadluis-default-rtdb.firebaseio.com",
    projectId: "railmadluis",
    storageBucket: "railmadluis.appspot.com",
    messagingSenderId: "553023495854",
    appId: "1:553023495854:web:452ba14ab33ed5bcb2573f"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
var contactFormDB=firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener("submit",submitForm);
function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal('name');
    var emailid = getElementVal('email');
    var pass = getElementVal('password');

    // Save the data to Firebase
    contactFormDB.push({
        name: name,
        email: emailid,
        password: pass
    }).then(() => {
        console.log("Data saved successfully.");
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
}
