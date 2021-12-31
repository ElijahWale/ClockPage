// let currentTime = document.querySelector('.current-time');

function currentTime(){
    let date =new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    let session = "AM";
    let message="Morning";

    if(hours == 0){
      hours = 12;
       
    }
    
    
    if(hours > 12){
        message="Afternoon";
        if(hours > 17){
            message = "Evening";
        }
        hours = hours - 12;
        // session = "PM"
        
    }

    // to add zero when we have single figures
    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;

    // store the time now in a variable
    let time = hours + ":" + mins + "<span>GMT</span>";

    document.getElementById('currentTime').innerHTML = time;
    document.getElementById('message').innerText = message;

    let t = setTimeout(function(){ currentTime() }, 1000); 

}
currentTime();
