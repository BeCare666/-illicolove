// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDGjJ1-gLtw0__8Om8OEzbXYNgBPWw1ik",
    authDomain: "illicolove0.firebaseapp.com",
    databaseURL: "https://illicolove0-default-rtdb.firebaseio.com",
    projectId: "illicolove0",
    storageBucket: "illicolove0.appspot.com",
    messagingSenderId: "687063035754",
    appId: "1:687063035754:web:7f03061d8cd5fd0ee9bf13"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const sendEmail = firebase.functions().httpsCallable('sendEmail');
  
  function sendEmail() {
    sendEmail()
      .then((result) => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  