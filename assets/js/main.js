// Firebase JS

var firebaseConfig = {
    apiKey: "AIzaSyCug1_WbJw485SHyKAPUj9n3kqHF5S1M6c",
    authDomain: "thisisatest-3421c.firebaseapp.com",
    databaseURL: "https://thisisatest-3421c.firebaseio.com",
    projectId: "thisisatest-3421c",
    storageBucket: "thisisatest-3421c.appspot.com",
    messagingSenderId: "1017165791166",
    appId: "1:1017165791166:web:972993977ede630a"
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

    // Variables for scheduler
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    firstTrain = moment($("#first-train").val().trim(), "HH:mm").format("HH:mm");
    frequency = parseInt($("#frequency").val().trim());

    console.log(trainName);
    console.log(firstTrain);

    // Math for Time Difference and Time remaining
    var firstTrainQueued = moment(firstTrain, "hh:mm");
    var timeDifference = moment().diff(moment(firstTrainQueued), "minutes");

    console.log(timeDifference);

    var remainingTime = timeDifference % frequency;

    console.log(remainingTime);

    var untilNextTrain = frequency - remainingTime;

    console.log(untilNextTrain);

    var nextTrain = moment().add(untilNextTrain, "minutes");
    var nextTrain2 = moment().add(2, "minutes");
    nextTrain = moment(nextTrain).format("HH:mm");

    console.log("num1: " + nextTrain);
    console.log("num2: " + nextTrain);

    // New Train Variable
    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        nextTrain: nextTrain,
        untilNextTrain: untilNextTrain
    };

    // Uploads data to the database
    database.ref().push(newTrain);

    // Clear Text Boxes
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");

    // console.log(newTrain.name);
    // console.log(newTrain.destination);
    // console.log(newTrain.firstTrain);
    // console.log(newTrain.frequency);
});

// Adding data to Firebase
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;
    var nextTrain = childSnapshot.val().nextTrain;
    var untilNextTrain = childSnapshot.val().untilNextTrain;

    $("#timeTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + untilNextTrain + "</td><td>");
});