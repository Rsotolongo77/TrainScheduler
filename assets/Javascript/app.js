$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyDM3dvO4YG5KWJx0MPgdvXpmmYs1k4sCzI",
        authDomain: "traintime-8bd04.firebaseapp.com",
        databaseURL: "https://traintime-8bd04.firebaseio.com",
        projectId: "traintime-8bd04",
        storageBucket: "",
        messagingSenderId: "1026634328097",
        appId: "1:1026634328097:web:28f5ee7b47b3dee1e29b60"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var trainName;
    var trainDestination;
    var trainfrequency;
    var firstTrainTime;
    var trainNextArrival;
    var trainMinutesAway;


    $("#add-train").on("click", function (event) {

        event.preventDefault();

        trainName = $("#train-input").val().trim();
        //value from input from train form//
        trainDestination = $("#destination-input").val().trim();
        trainfrequency = $("#frequency-input").val().trim();
        firstTrainTime = $("#time-input").val().trim();

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainfrequency);
        console.log(firstTrainTime);
