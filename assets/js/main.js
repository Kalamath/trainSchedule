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
var currentSeconds = moment().seconds();
var currentTime = moment(currentHour + ":" + currentMinutes + ":" + currentSeconds, "HH:mm:ss");
$(".clock").text(currentTime.format("h:mm:ss a"));

$("#addTrain").on("click", function(event) {
  
  event.preventDefault(); 
})

// function updateTime(){
//   var losAngeles = moment.tz("America/Los_Angeles").format('HH:mm a');
//  $('.clock').html(currentTime.format("h:mm:ss a"));
// };

// moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lz50 1zb0 Op0');                                                                         

// updateTime();
// setInterval(function(){
//  updateTime();
// },60000);
