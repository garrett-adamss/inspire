
function _drawClock(){
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let set = "AM"
    min = checkTime(min);
    sec = checkTime(sec);

    if(hour == 0){
        hour = 12
    }
    if(hour > 12){
        hour = hour - 12;
        set = "PM"
    }

    // hour = hour < 10 ? 0 + hour : hour;
    // min = min < 10 ? 0 + min : min;
    // sec = sec < 10 ? 0 + sec : sec;

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    let currentTime = hour + ':' + min + ':' + sec + ' ' + set;

    document.getElementById('clock').innerHTML= currentTime
}

export class ClockController{
    constructor(){
        setInterval(_drawClock, 500)
    }
}