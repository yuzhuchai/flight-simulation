// this function updates the timezone to the page 
let timeDisplay = $('#time')
let zone = "local" 
let hour
let minute 
let second
let enableDelay = 0

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
    
    d = new Date(timeString)
    d.setSeconds(d.getSeconds() - 10*enableDelay)
    console.log(d)

    timeDisplay.text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    setTimeout(updateTimeZone, 1000);
}
//this is to test the time zone change when triggered with zone variable
// $('#testTimeChange').on('click',()=>{
//     zone = "America/New_York"
// })



let p04 = $('#p04').html()
let p04display = false

//when delay function clicks 
$(".delay").on('click',()=>{
    enableDelay ++
    console.log("clicked", enableDelay)
})

$(".nyTime").on('click',()=>{
    zone = "America/New_York"
})
$("#display04").on('click',()=>{
    if(!p04display){
        $('#text').append(p04)
    }
    p04display = true;
})