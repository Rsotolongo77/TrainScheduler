$(document).ready(function () {

    console.log("hooked up");
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
    

    //on click gets user user input values from form// 
    $("#add-train").on("click", function (event) {

        event.preventDefault();

        trainName = $("#train-input").val().trim();
        trainDestination = $("#destination-input").val().trim();
        trainfrequency = $("#frequency-input").val().trim();
        firstTrainTime = $("#time-input").val().trim();

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainfrequency);
        console.log(firstTrainTime);

        //pushes objects to database//
        database.ref().push({

            dbTrainName: trainName,
            dbTrainDestination: trainDestination,
            dbTrainFrequency: trainfrequency,
            dbFirstTrainTime: firstTrainTime,


        })

        
        //empties inputs for next train information user wants to put in//
        $("#train-input").val("");
        $("#destination-input").val("");
        $("#frequency-input").val("");
        $("#time-input").val("");

    })

    //Gets values back from database to then convert and push final values/inputs to HTMl page//
    database.ref().on("child_added", function (snapshot) {

        console.log(snapshot.val());

        var tName = snapshot.val().dbTrainName;
        var tDestination = snapshot.val().dbTrainDestination;
        var tFrequency = snapshot.val().dbTrainFrequency;
        var tFirstTrainTime = snapshot.val().dbFirstTrainTime;

        var firstTimeConverted = moment(tFirstTrainTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);


        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);


        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);


        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);


        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


        
        //dynamically create a table row to display final data for train//
            var tr = $("<tr>").append(
                $("<td>").text(tName),
                $("<td>").text(tDestination),
                $("<td>").text(tFrequency),
                $("<td>").text(moment(nextTrain).format("hh:mm a")),
                $("<td>").text(tMinutesTillTrain),
                
              );

        //dynamically create a table row to display final data for train//
        $("tbody").append(tr);

    });


});