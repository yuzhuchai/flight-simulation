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
    // console.log(d)
    timeDisplay.text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    setTimeout(updateTimeZone, 1000);
}



// display texts functions ----------------------------------------------------------

let p02 = $('#p02').html()
let p02display = false 

let p03 = $('#p03').html()
let p03display = false 

let p04 = $('#p04').html()
let p04display = false

let p05 = $('#p05').html()
let p05display = false


let p06 = $('#p06').html()
let p06display = false


console.log()

//P01 "delayed" 
$('#text').on('click','#delay01',()=>{
    $("#delay01").addClass('clickedLink')
    $('#delayAnHour').addClass('clickedLink')
    if(!p02display){
        $("#text").append("<div id='p02show'>"+ p02 +"</div>")
    }
    p02display = true;
})

//P01 "an hour" 
$('#delayAnHour').on("click", ()=>{
    delayAnHour = 1
    if(!p02display){
        $('#text').append("<div id='p02show'>" + p02 + "</div>")
    }
    p02display = true;
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
})


//P01 "the city"
$("#theCity01").on('click',()=>{
    if(!p04display){  
        $('#text').append("<div id='p04show'>" + p04 + "</div>")
    }
    p04display = true;
    $('#theCity01').addClass('clickedLink')
})

 
//P02 "write", need to bound the onclick function to the parent div, JQuery OnClick Method is bound to an element or selector on page ready/load. 
$('#text').on('click', '.write02', ()=>{
    console.log(p03display)
    if(!p03display){
        console.log('p03not shown')
        $('#text').append("<div id='p03show'>" + p03 + "</div>")
    }
    p03display = true;
    $(".write02").addClass('clickedLink')
})

//p03 next 
$('#text').on('click', '.next03',()=>{
    if(!p04display){
        $('.read04').contents().unwrap();
        $("br",'#p04').remove();
        let newp04 = $('#p04').html()
        $('#text').append("<div id='p04show'>" + newp04 + "<span class='next04'>[next]</span><br/><br></div>")
        p04display = true;
        $('#theCity01').addClass('clickedLink')
    } else {
        $('#text').append("<div id='p05show'>" + p05 + "</div>")
        p05display = true;
    }
    $('.next03').remove()
})

$('#text').on('click', '.next04',()=>{ 
    $('#text').append("<div id='p05show'>" + p05 + "</div>")
    p05display = true; 
    $('.next04').remove()
})


//p04 "read"
$('#text').on('click', '.read04',()=>{
    if(!p02display){
        $('#text').append("<div id='p02show'>" + p02 + "</div>")
        p02display = true
    } 
    $('.read04').addClass('clickedLink')
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
})


//p05 "journal"
$('#text').on('click', '.journal05',()=>{
    if(!p06display){
        $('#text').append("<div id='p06show'>" + p06 + "</div>")
        p06display = true
    } 
    $('.journal05').addClass('clickedLink')
})





// change time zone functions -----------------------------------------
//change time when "NY" is clicked 
$(".nyTime").on('click',()=>{
    zone = "America/New_York"
})


//when delay function clicks ----- can have multiple delays and can be clicked multiple times 
$(".delay").on('click',()=>{
    enableDelay ++
    console.log("clicked", enableDelay)
})
