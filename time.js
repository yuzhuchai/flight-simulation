console.log(timeArray)
// $('#timeLineMap').html(timeArray)





const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
window.devicePixelRatio = 2;
// css pixels display size 

let width = $('#timeMapDiv').width();
let height = $('#timeMapDiv').height();


canvas.style.width = width + "px";
canvas.style.height = height + 'px';

let scale = window.devicePixelRatio;
canvas.width = Math.floor(width * scale);
canvas.height = Math.floor(height * scale);

ctx.scale(scale, scale)
ctx.font = '30px Arial, Helvetica';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.lineWidth = 3;
ctx.lineCap = "round";



/*
    length = 3 
    width = 900
    step = 900/3 = 300 
    i = 0
    Array[0] = 0-300  -> step*i - step*i+1
    i = 1
    Array[1] = 300-600 -> step*i - step*i+1
    Array[2] = 600-900

    Math.random()*step + step*i
*/





function updateTimeMap(){
    let displayMap = timeArray.map(time=>{
        // console.log(time)
        return "<div>"+ time + "</div>"
    })
    // $('#timeMapDiv').html(displayMap.join(""))
    for(let i = 0; i < timeArray.length; i++){
        let step = (width-400) / timeArray.length


        let x = Math.random()*step + step*i + 200;
        let y = Math.random()*(height-100) + 100


    
        if(i > 0){
            let midX = (x + px) / 2 
            let diffX = midX - px
            let midY = (y + py) / 2
            let diffY = midY - py 
            console.log(px,py,midX, midY,x,y,diffX, diffY);   
        }


        ctx.fillStyle = 'black';
        if(i > 0 && i % 2){
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.quadraticCurveTo(((x+px)/2 + x)/2, (y+py)/2 + 200, px,py)
            ctx.stroke();
        } else if (i > 0 && (i % 2 == 0) ){
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.quadraticCurveTo(((x+px)/2 + x)/2, (y+py)/2 -200, px,py)
            ctx.stroke();
        }

        let textWidth = ctx.measureText(timeArray[i]).width + 20;
        ctx.fillStyle="black"
        ctx.fillRect(x-textWidth/2, y-25,textWidth , 50);
        ctx.fillStyle = "white";
        ctx.fillText(timeArray[i],x,y);


        px = x;
        py = y;
    }
}









// console.log(displayMap.join(""))


// https://stackoverflow.com/questions/22004831/how-to-open-browsers-javascript-console-programmatically

//displaying the time map like the twine map but with time? 