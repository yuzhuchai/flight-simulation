// this function updates the timezone to the page 
let timeDisplay = $('#time')
let zone = "local" 
let hour
let minute 
let second
let enableDelay = 0
let delayAnHour = 0

function updateTimeZone(){
    // "America/New_York"
    // "America/Chicago"
    // "local"
    let date = new Date();
    if(zone == "local"){
        timeString =  date.toLocaleString("en-US", {hour12: false})

    } else {
        timeString =  date.toLocaleString("en-US", {timeZone: zone, hour12: false});
    }
    //delay time every 10 seconds when delay is clicked
    d = new Date(timeString)
    d.setSeconds(d.getSeconds() - 10*enableDelay)
    d.setHours(d.getHours() - delayAnHour)
    console.log(d)

    timeDisplay.text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    setTimeout(updateTimeZone, 1000);
}
//this is to test the time zone change when triggered with zone variable
// $('#testTimeChange').on('click',()=>{
//     zone = "America/New_York"
// })


// display texts functions --------------------------------------------------

let p02 = $('#p02').html()
let p02display = false 

let p03 = $('#p03').html()
let p03display = false 

let p04 = $('#p04').html()
let p04display = false


//P01 "delayed" 
$('#delay01').on('click',()=>{
    $("#delay01").addClass('clickedLink')
    $('#delayAnHour').addClass('clickedLink')
    if(!p02display){
        $("#text").append("<div id='p02show'>"+ p02 +"</div>")
    }
    p02display = true;
})

//P02 "an hour" 
$('#delayAnHour').on("click", ()=>{
    delayAnHour = 1
    if(!p02display){
        $('#text').append("<div id='p02show'>" + p02 + "</div>")
    }
    p02display = true;
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
})


//P04 "the city"
$("#theCity01").on('click',()=>{
    if(!p04display){
        $('#text').append("<div id='p04show'>" + p04 + "</div>")
    }
    p04display = true;
    $('#theCity01').addClass('clickedLink')
})



// change time zone functions -----------------------------------------
//change time when NY is clicked 
$(".nyTime").on('click',()=>{
    zone = "America/New_York"
})


//when delay function clicks ----- can have multiple delays and can be clicked multiple times 
$(".delay").on('click',()=>{
    enableDelay ++
    console.log("clicked", enableDelay)
})
