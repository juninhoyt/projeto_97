const firebaseConfig = {
    apiKey: "AIzaSyDfxfyFDGKZRaatdDwSO0pS_15-8IS7foM",
    authDomain: "concord-9640f.firebaseapp.com",
    databaseURL: "https://concord-9640f-default-rtdb.firebaseio.com",
    projectId: "concord-9640f",
    storageBucket: "concord-9640f.appspot.com",
    messagingSenderId: "3672645288",
    appId: "1:3672645288:web:896b9669988cca8cfe2c9d"
};
firebase.initializeApp(firebaseConfig)
var guarda_dados = firebase.database().ref()
guarda_dados.once("value").then(function (salas) {
    salas.forEach(function (sala) {
        console.log(sala.key)
    })
})