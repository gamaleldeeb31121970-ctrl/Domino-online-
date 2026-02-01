// إعداد Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// وظائف تسجيل الدخول والتسجيل
function register(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => alert('تم التسجيل بنجاح'))
        .catch(error => alert(error.message));
}

function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => alert('تم تسجيل الدخول'))
        .catch(error => alert(error.message));
}
