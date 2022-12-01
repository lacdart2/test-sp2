import { read } from "../api_settings/posts/read.js";
import { postDetail } from "../api_settings/posts/postDetails.js";
const event = new Date(/* details.endsAt */);

export function remaining(details) {
   
    setInterval(function () {
        const endDate = details.endsAt.toLocaleString();
        console.log(endDate);

        var bidEndDate = new Date(endDate).getTime();
        console.log(bidEndDate);
        /*   console.log(postDetail.details.endsAt); */
        // Update the count down every 1 second

        // Get todays date and time
        var now = new Date().getTime();
        console.log(now);

        // distance between now and the bid date
        var distance = bidEndDate - now;
        console.log(distance);

        // Time calculations for days, hours, minutes and seconds
   
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(days, hours, minutes, seconds);

       
    
        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;
        

        // If the count down is finished
        if (distance < 0) {
            clearInterval(remaining);
            document.getElementById("minutes").innerHTML = "SOON";
        }
        


    }, 1000);
    read(post);

    }

          
