$(document).ready(function()  {
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
    
    
    $("#add-train").on("click", function(event)  {
    
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
    
    
        database.ref().push({
    
            dbTrainName: trainName,
            dbTrainDestination: trainDestination,
            dbTrainFrequency: trainfrequency,
            dbFirstTrainTime: firstTrainTime,
    
    
        })
    
       alert ("Train added...!") ;
    
        $("#train-input").val("");    
        $("#destination-input").val("");  
        $("#frequency-input").val("");  
        $("#time-input").val(""); 
    
    })
    
    
        database.ref().on("child_added",function (snapshot) {
    
            console.log(snapshot.val());
            var tName = snapshot.val().dbTrainName,
            var tDestination = snapshot.val().dbTrainDestination,
            var tFrequency = snapshot.val().dbTrainFrequency,
            var tFirstTrainTime = snapshot.val().dbFirstTrainTime,
    
    
            var tr=$("<tr>");
            tr.append(
                "<td>"+tName+"</td>",
                "<td>"+tDestination+"</td>",
                "<td>"+tFrequency+"</td>",
                "<td> To be calculated </td>",
                "<td> To be calculated </td>",
    
    
            )
    
    
            $("tbody").append(tr)
    
        });
    
    
    });