// Firebase JS

var firebaseConfig = {
    apiKey: "AIzaSyDjA2Lp4Qga0i6vs4xUH4-1tCm-nwOYgIk",
    authDomain: "fullstackclass-15e91.firebaseapp.com",
    databaseURL: "https://fullstackclass-15e91.firebaseio.com",
    projectId: "fullstackclass-15e91",
    storageBucket: "",
    messagingSenderId: "568587410686",
    appId: "1:568587410686:web:38a6ac40b6d1a074"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//   Clock
var myTimer = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    $(".clock").text(d.toLocaleTimeString());
}

// Add New Train
var frequency = 0;
var firstTrain = 0;

$("#addTrain").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    firstTrain = moment($("#first-train").val().trim(), "HH:mm").format("HH:mm");
    frequency = parseInt($("#frequency").val().trim());
    console.log(firstTrain);

})