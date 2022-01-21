
//this function generate a reandom intiger  
function randomIndex(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//this function generate a random intiger excluding a few - seat chart 
function randomInt(min, max) {
    let num = Math.floor(Math.random() * (max - min) + min);
    return (num === 4 || (num > 10 && num < 17) ) ? randomInt(min, max) : num;
}

// this function geenerate a random seat number
function generateRandomSeatNum(){
    let num = randomInt(1,28);
    let letterArr = ["A", "F", "B", "E", "C", "D"];
    let randomLet 
    let setNum
    if(num < 4){
        randomLet = letterArr[randomIndex(0,4)]
        num.toString()
        setNum =  "0"+num+randomLet
    } else if((num > 4 && num < 11) || num > 17){
        randomLet = letterArr[randomIndex(0,6)]
        if(num < 10 ){
            num.toString()
            setNum = "0"+num+randomLet
        } else {
            num.toString()
            setNum = num+randomLet
        }
    } else if(num = 17){
        randomLet = letterArr[randomIndex(2,6)]
        num.toString()
        setNum = num + randomLet
    } 
    console.log(setNum)
    return setNum
}



// this function updates the timezone to the page 
let timeDisplay = $('#time')
let zone = "local" 
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
    let time = timeString.split(" ");
    // console.log(time)
    timeDisplay.text(time[1])
    setTimeout(updateTimeZone, 1000);
}
//this is to test the time zone change when triggered with zone variable
testTimeChange
$('#testTimeChange').on('click',()=>{
    zone = "America/New_York"
})



// making it fullscreen https://stackoverflow.com/questions/228377/could-a-website-force-the-browser-to-go-into-fullscreen-mode#:~:text=You%20could%20just%20tell%20the%20user%20to%20press%20F11.
// interesting read

// toggle fullscreen when enter the entertainment secetion 
$('#touch').on('click',()=>{
    console.log('clicked')
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        $('#welcomePage').hide();
        $('#inflightEntertainment').show();
    } 
})
// toggle fullscreen when choing the in flight map, need more fucntion to display the inflight map
$('#exit').on('click',()=>{
    console.log('clicked')
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            $('#welcomePage').show();
            $('#inflightEntertainment').hide();
        }
    } 
})

//call to generate a random seat number when page loads
$(window).on('load', ()=>{
    updateTimeZone();
    console.log('ready')
    $('#seatNum').text(generateRandomSeatNum())
})


