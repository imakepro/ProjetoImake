(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAuT9-GPapZjCWPU4cetijrmGhsTE6iKw0",
        authDomain: "imake-projeto.firebaseapp.com",
        databaseURL: "https://imake-projeto.firebaseio.com",
        projectId: "imake-projeto",
        storageBucket: "imake-projeto.appspot.com",
        messagingSenderId: "1069998702154",
        appId: "1:1069998702154:web:1e45e541b985f539"
      };
    firebase.initializeApp(firebaseConfig);
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', e => {
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            alert("Login: "+txtEmail.value+"Senha: "+txtPassword.value);
            window.location.href = "telaPrincipal.html";
        } else {
            Display.innerText = "Insira seus dados";
        }
    });
}());

function logout() {
        firebase.auth().signOut().then(() =>{
        });