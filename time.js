console.log(timeArray)
// $('#timeLineMap').html(timeArray)

function formatTimeMap(){
    let displayMap = timeArray.map(time=>{
        console.log(time)
        return "<div>"+ time + "</div>"
    })
    $('#timeMapDiv').html(displayMap.join(""))
}


// console.log(displayMap.join(""))
