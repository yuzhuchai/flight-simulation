// this function updates the timezone to the page 
let timeDisplay = $('#time')
let zone = "local" 
let time 

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
    time = timeString.split(" ");
    // console.log(time)
    timeDisplay.text(time[1])
    setTimeout(updateTimeZone, 1000);
}
//this is to test the time zone change when triggered with zone variable
// $('#testTimeChange').on('click',()=>{
//     zone = "America/New_York"
// })



let p04 = $('#p04').html()
let p04display = false


$("#delay").on('click',()=>{

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