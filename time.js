console.log(timeArray)
// $('#timeLineMap').html(timeArray)

function updateTimeMap(){
    let displayMap = timeArray.map(time=>{
        // console.log(time)
        return "<div>"+ time + "</div>"
    })
    $('#timeMapDiv').html(displayMap.join(""))
}


// console.log(displayMap.join(""))


// https://stackoverflow.com/questions/22004831/how-to-open-browsers-javascript-console-programmatically

//displaying the time map like the twine map but with time? 