// this function updates the timezone to the page 
let timeDisplay = $('#time')
let zone = "local" 
let hour
let minute 
let second
let enableDelay = 0
let delayAnHour = 0
let typeWriterActive = false 
let loseHour = 0
let gainHour = 0
let col = 255
let buttonEnable = false 


function updateTimeZone(){
    // "America/New_York"
    // "America/Chicago"
    // "local"
    let date = new Date();
    if(zone == "local"){
        timeString =  date.toLocaleString("en-US", {hour12: false})
    } else {
        timeString =  date.toLocaleString("en-US", {timeZone: zone, hour12: false});
        // fix bug, when hour is 24 need to convert to 00
        let changeTime = timeString.split(' ')[1].split(':')
        if(changeTime[0] == "24"){
            timeString = timeString.split(' ')[0] + " 00:" + changeTime[1] +":"+ changeTime[2]
        }
    }
    //delay time every 10 seconds when delay is clicked
    d = new Date(timeString)
    d.setSeconds(d.getSeconds() - 10*enableDelay)
    d.setHours(d.getHours() - delayAnHour - loseHour + gainHour)
    console.log(d)
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

let p07 = $('#p07').html()
let p07display = false

let p08 = $('#p08').html()
let p08display = false

let p09 = $('#p09').html()
let p09display = false


let p10 = $('#p10').html()
let p10display = false

let p25 = $('#p25').html()
let p25display = false

//P01 "delayed" 
$('#textContainer').on('click','#delay01',()=>{
    $("#delay01").addClass('clickedLink')
    $('#delayAnHour').addClass('clickedLink')
    if(!p02display){
        $("#text").append("<div id='p02show' class='textDiv'>"+ p02 +"</div>")
    }
    p02display = true;
    $('.read04').addClass('clickedLink')
})

//P01 "an hour" 
$('#textContainer').on("click", "#delayAnHour", ()=>{
    delayAnHour = 1
    if(!p02display){
        $('#text').append("<div id='p02show' class='textDiv'>" + p02 + "</div>")
    }
    p02display = true;
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
    $('.read04').addClass('clickedLink')
})


//P01 "the city"
$("#theCity01").on('click',()=>{
    p04 = $('#p04').html()
    if(!p04display){  
        $('#text').append("<div id='p04show' class='textDiv'>" + p04 + "</div>")
    }
    p04display = true;
    $('#theCity01').addClass('clickedLink')
})

 
//P02 "write", need to bound the onclick function to the parent div, JQuery OnClick Method is bound to an element or selector on page ready/load. 
$('#textContainer').on('click', '.write02', ()=>{
    console.log(p03display)
    if(!p03display){
        $('#text').append("<div id='p03show' class='textDiv'>" + p03 + "</div>")
    }
    p03display = true;
    $(".write02").addClass('clickedLink')
    $('.read04').addClass('clickedLink')
})

//p03 next 
$('#textContainer').on('click', '.next03',()=>{
    if(!p04display){
        $('.read04').contents().unwrap();
        $("br",'#p04').remove();
        let newp04 = $('#p04').html()
        $('#text').append("<div id='p04show' class='textDiv'>" + newp04 + "<span class='next04'>[next]</span><br/><br></div>")
        p04display = true;
        $('#theCity01').addClass('clickedLink')
    } else {
        $('#text').append("<div id='p05show' class='textDiv'>" + p05 + "</div>")
        p05display = true;
    }
    $('.next03').remove()
})

$('#textContainer').on('click', '.next04',()=>{ 
    $('#text').append("<div id='p05show' class='textDiv'>" + p05 + "</div>")
    p05display = true; 
    $('.next04').remove()
})


//p04 "read"
$('#textContainer').on('click', '.read04',()=>{
    if(!p02display){
        $('#text').append("<div id='p02show' class='textDiv'>" + p02 + "</div>")
        p02display = true
    } 
    $('.read04').addClass('clickedLink')
    $("#delayAnHour").addClass('clickedLink');
    $("#delay01").addClass('clickedLink')
})


//p05 "journal"
$('#textContainer').on('click', '.journal05',()=>{
    if(!p06display){
        $('#text').append("<div id='p06show' class='textDiv'>" + p06 + "</div>")
        // $('#text').append("<div id='p07show'>" + p07 + "</div>")
        $('#text').append("<div id='p07show' class='textDiv'><span id='typedText'></span><span id='cursor'> |</span></div>")

        p06display = true
        p07display = true
    } 
    $('.journal05').addClass('clickedLink')
    typeWriterActive = true
})


//p07 "seenIt07"
$('#text').on('click', '.seenIt07', ()=>{
    p08 = $('#p08').html()
    if(!p08display){
        $('#text').append("<div id='p08show' class='textDiv'>" + p08 + "</div>")
    }
    $('.seenIt07').addClass('clickedLink')
})

//p07 "chicago"
$('#textContainer').on('click', '.chicago07', ()=>{
    if(!p09display){
        $('#text').append("<div id='p09show' class='textDiv'>" + p09 + "</div>")
    }
    $('.chicago07').addClass('clickedLink')
    $('.loseHour08').addClass('clickedLink')
    p09display = true
})



//P08 "gain An Hour"
$('#textContainer').on('click', '.gainHour08', ()=>{
    if(!p25display){
        $('#text').append("<div id='p25show' class='textDiv'>" + p25 + "</div>")
    }
    $('.gainHour08').addClass('clickedLink')
    p25display = true
})


//P08 "lose An Hour"
$('#textContainer').on('click', '.loseHour08', ()=>{
    console.log('clicked')
    if(!p09display){
        $('#text').append("<div id='p09show' class='textDiv'>" + p09 + "</div>")
    } 
    $('.loseHour08').addClass('clickedLink')
    $('.chicago07').addClass('clickedLink')
    p09display = true
})


//p09 "waiting"
$('#textContainer').on('click', '.waiting09', ()=>{
    // console.log('clicked')
    if(!p10display){
        $('#text').append("<div id='p10show' class='textDiv'>" + p10 + "</div>")
    } 
    $('.waiting09').addClass('clickedLink')
    p09display = true
})



// this is the typewriter effecta ---------------------
let i = 0
$(document).on('keypress',(e)=>{
    if(typeWriterActive){
        let str = "they are spraying green goo on the wings of the plane, before they started spraying green goo on the wings of the plane. I’ve seen it before, in Chicago" 
        let strArr = str.split('')
        let typedText = str.substring(0,i)
        i++
        $('#typedText').text(typedText)
        if(i > str.length){
            $('#p07show').html(p07)
            typeWriterActive = false;
        }
    }
})



//intercom change text to button 
$("#textContainer").on('click','.intercom09',()=>{
    if(!buttonEnable){
        $('#text').hide();
        let content =  $('#text').text()
        console.log(content)
        let word = content.split(" ");
        let newButtonArr = word.filter(word =>{
            return word !== "" 
        }).map(word => {
            if(word != "intercom"){
                return "<button>"+ word +"</button>"
            } else {
                return "<button class='intercom09'>" + word + "</button>"
            }  
        })
        let newHTML = newButtonArr.join("")
        console.log(newHTML)
        $('#buttonDiv').show();
        $("#buttonDiv").replaceWith( "<div id=buttonDiv>"+newHTML+"</div>" )
        buttonEnable = true;
    } else {
        console.log(buttonEnable,"this is triggered")
        $('#buttonDiv').hide()
        $('#text').show();
        buttonEnable = false 
    }
})


// change time zone functions -----------------------------------------
//change time when "NY" is clicked 
$(".nyTime").on('click',()=>{
    zone = "America/New_York"
})


//change time when "CHI" is clicked
$('#textContainer').on('click','.chiTime',()=>{
    zone = "America/Chicago"
})

//when delay function clicks ----- can have multiple delays and can be clicked multiple times 
$(".delay").on('click',()=>{
    enableDelay ++
    // console.log("clicked", enableDelay)
})


//when loseHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click',".loseHour",()=>{
    loseHour ++
    col -=10
    let color = "rgb("+col.toString() +","+ col.toString()+ "," + col.toString()+")"
    $("body").css('background-color',color)
    // console.log("clicked", enableDelay)
})

//when gainHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click','.gainHour',()=>{
    gainHour ++
    col +=10
    let color = "rgb("+col.toString() +","+ col.toString()+ "," + col.toString()+")"
    $("body").css('background-color',color)
    // console.log("clicked", enableDelay)
})


// bug time change is a bit weird