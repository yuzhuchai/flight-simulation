//progress - to the 10th


// this function updates the timezone to the page 
let timeDisplay = $('#time')
let displayedTime
let zone = "local" 
let hour
let minute 
let second
let enableDelay = 0
let delayAnHour = 0
let hour15minH = 0
let hour15minM = 0
let typeWriterActive = false 
let loseHour = 0
let gainHour = 0
let col = 255
let buttonEnable = false 
let timeArray = []


function updateTimeZone(){
    // "America/New_York"
    // "America/Chicago"
    // "local"
    let date = new Date();
    let timeString
    if(zone == "local"){
        timeString =  date.toLocaleString("en-US", {hour12: false})
        let changeTime = timeString.split(' ')[1].split(':')
        if(changeTime[0] == "24"){
            timeString = timeString.split(' ')[0] + " 00:" + changeTime[1] +":"+ changeTime[2]
        }
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
    d.setMinutes(d.getMinutes() - hour15minM)
    d.setHours(d.getHours() - delayAnHour - loseHour + gainHour - hour15minH)
    // console.log(d)
    displayedTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    timeDisplay.text(displayedTime)
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

let p11 = $('#p11').html()
let p11display = false

let p12 = $('#p12').html()
let p12display = false

let p13 = $('#p13').html()
let p13display = false

let p14 = $('#p14').html()
let p14display = false

let p15 = $('#p15').html()
let p15display = false

let p16 = $('#p16').html()
let p16display = false

let p17 = $('#p17').html()
let p17display = false


let p18 = $('#p18').html()
let p18display = false

let p19 = $('#p19').html()
let p19display = false

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
    timeArray.push(displayedTime)
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
    // console.log(p03display)
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

//p04 next 
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
    // console.log('clicked')
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


//p10 "waiting"
$('#textContainer').on('click', '.redPlanet10', ()=>{
    // console.log('clicked')
    if(!p13display){
        $('#text').append("<div id='p13show' class='textDiv'>" + p13 + "</div>")
    } 
    $('.redPlanet10').addClass('clickedLink')
    p13display = true
})

//p10 "next"
$('#textContainer').on('click', '.next10',()=>{ 
    $('#text').append("<div id='p11show' class='textDiv'>" + p11 + "</div>")
    p11display = true; 
    $('.next10').remove()
})

//p11 "the captain"
$('#textContainer').on('click', '.captain11', ()=>{
    if(!p12display){
        $('#text').append("<div id='p12show' class='textDiv'>" + p12 + "</div>")
    } 
    $('.captain11').addClass('clickedLink')
    p12display = true
})


//p12 "authoritative"
$('#textContainer').on('click', '.auth12', ()=>{
    if(!p14display){
        $('#text').append("<div id='p14show' class='textDiv'>" + p14 + "</div>")
    } 
    $('.auth12').addClass('clickedLink')
    p14display = true
})

//p14 "giggling"
$('#textContainer').on('click', '.giggle14', ()=>{
    if(!p15display){
        $('#text').append("<div id='p15show' class='textDiv'>" + p15 + "</div>")
    } 
    $('.giggle14').addClass('clickedLink')
    p15display = true
})

//p15 "was"
$('#textContainer').on('click', '.was15', ()=>{
    if(!p16display){
        $('#text').append("<div id='p16show' class='textDiv'>" + p16 + "</div>")
    } 
    $('.was15').addClass('clickedLink')
    p16display = true
})


//p15 "wall"
$('#textContainer').on('click', '.wall15', ()=>{
    if(!p17display){
        $('#text').append("<div id='p17show' class='textDiv'>" + p17 + "</div>")
    } 
    $('.wall15').addClass('clickedLink')
    p17display = true
})


//p16 "delay"
$('#textContainer').on('click', '.delay16', ()=>{
    $('.delay16').addClass('clickedLink')
})

//p16 "travel 2 miles"
$('#textContainer').on('click', '.travel2miles16', ()=>{
    if(!p18display){
        $('#text').append("<div id='p18show' class='textDiv'>" + p18 + "</div>")
    } 
    $('.travel2miles16').addClass('clickedLink')
    $('.heatoff17').addClass('clickedLink')
    p18display = true
})


//p17 "heat shuts off"
$('#textContainer').on('click', '.heatoff17', ()=>{
    if(!p18display){
        $('#text').append("<div id='p18show' class='textDiv'>" + p18 + "</div>")
    } 
    $('.heatoff17').addClass('clickedLink')
    $('.travel2miles16').addClass('clickedLink')
    p18display = true
})


//p18 "next"
$('#textContainer').on('click', '.next18', ()=>{
    if(!p19display){
        $('#text').append("<div id='p19show' class='textDiv'>" + p19 + "</div>")
    } 
    $('.next18').remove()
    p19display = true
})


// this is the typewriter effect ---------------------
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
$("#textContainer").on('click','.intercom',()=>{
    if(!buttonEnable){
        $('#text').hide();
        let content =  $('#text').text()
        // console.log(content)
        let word = content.split(" ");
        let newButtonArr = word.filter(word =>{
            return word !== "" 
        }).map(word => {
            if(word != "intercom"){
                return "<button>"+ word +"</button>"
            } else {
                return "<button class='intercom intercomButton'>" + word + "</button>"
            }  
        })
        let newHTML = newButtonArr.join("")
        // console.log(newHTML)
        $('#buttonDiv').show();
        $("#buttonDiv").replaceWith( "<div id=buttonDiv>"+newHTML+"</div>" )
        buttonEnable = true;
    } else {
        // console.log(buttonEnable,"this is triggered")
        $('#buttonDiv').hide()
        $('#text').show();
        buttonEnable = false 
    }
})


// change time zone functions -----------------------------------------
//change time when "NY" is clicked 
$(".nyTime").on('click',()=>{
    zone = "America/New_York"
    timeArray.push(displayedTime)
})


//change time when "CHI" is clicked
$('#textContainer').on('click','.chiTime',()=>{
    zone = "America/Chicago"
    timeArray.push(displayedTime)
})

//change time when Connectict is clicked 
$('#textContainer').on('click','.connecticutTime',()=>{
    zone = "America/New_York"
    timeArray.push(displayedTime)
    $('.connecticutTime').addClass('clickedLink')
})

//when delay function clicks ----- can have multiple delays and can be clicked multiple times 
$('#textContainer').on('click',".delay",()=>{
    enableDelay ++
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})

//delayanhour and 15mins
$('#textContainer').on('click',".hour15min16",()=>{
    hour15minM = 15
    hour15minH = 1
    // console.log("clicked", enableDelay)
    $('.hour15min16').addClass('clickedLink')
    timeArray.push(displayedTime)
})

//when loseHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click',".loseHour",()=>{
    loseHour ++
    col -=10
    let color = "rgb("+col.toString() +","+ col.toString()+ "," + col.toString()+")"
    $("body").css('background-color',color)
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})

//when gainHour function clicks ----- can have multiple delays and can be clicked multiple times 
$("#textContainer").on('click','.gainHour',()=>{
    gainHour ++
    col +=10
    let color = "rgb("+col.toString() +","+ col.toString()+ "," + col.toString()+")"
    $("body").css('background-color',color)
    // console.log("clicked", enableDelay)
    timeArray.push(displayedTime)
})


// bug time change is a bit weird