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
var currentHour = moment().hour();
var currentMinutes = moment().minutes();
var currentTime = moment(currentHour + ":" + currentMinutes, "HH:mm");
$(".clock").text(currentTime.format("h:mm a"));

