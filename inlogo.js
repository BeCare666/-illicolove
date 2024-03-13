const firebaseConfig = {
    apiKey: "AIzaSyCDGjJ1-gLtw0__8Om8OEzbXYNgBPWw1ik",
    authDomain: "illicolove0.firebaseapp.com",
    databaseURL: "https://illicolove0-default-rtdb.firebaseio.com",
    projectId: "illicolove0",
    storageBucket: "illicolove0.appspot.com",
    messagingSenderId: "687063035754",
    appId: "1:687063035754:web:7f03061d8cd5fd0ee9bf13"
  };
  //const UserConnectuser = localStorage.getItem("unserconnect");
  // Initialisation de Firebase
  firebase.initializeApp(firebaseConfig);

 firebase.auth().onAuthStateChanged(function(user) { 
 if(user === null){
    document.getElementById('preloader').style.display = "none"
 }else{
    var userId = user.uid;
    const database = firebase.database();
    const userRef = database.ref(`/utilisateurs/${userId}`);
  userRef.once("value").then((snapshot) =>{ 
    document.getElementById('preloader').style.display = "none"
    var BacktoprofilID = document.getElementById('backtoprofilID');
    var userbuttonID = document.getElementById('user-button');
    BacktoprofilID.style.display = "block"  
    document.getElementById('IDTRANSLATE8LI').style.display = "none"
    document.getElementById('IDTRANSLATE9LI').style.display = "none"
    document.getElementById('preloader').style.display = "none"
    //const userData = childSnapshot.val();
    var photoDataUrl = 'data:image/png;base64,' + snapshot.val().PIECESDIDENTITE;
    userbuttonID.innerHTML = `${snapshot.val().PIECESDIDENTITE ? `<img src="${photoDataUrl}" alt="Votre image" style="width: 6vh;  height: 6vh;"/>` : '<i class="bi bi-person-fill" style="width: 30px;"></i>&nbsp;'}`;
    userbuttonID.addEventListener('click', function(){
      window.location.href= "./v/profil.html"
    })
    // console.log(snapshot.val().PIECESDIDENTITE);
})
 }
});