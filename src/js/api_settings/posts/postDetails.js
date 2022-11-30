import { API_AUCTION_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

import { remaining } from "../../ui/countDown.js";
/* import { remaining } from "../../ui/countDown.js"; */

/* import { displayMessage } from "../../components/displayMessage.js"; */
const action = "/listings";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    /*  document.location.href = "/"; */
}

const getListingURL = `${API_AUCTION_URL}${action}/${id}`;

console.log(getListingURL);


export async function postDetail() {
    try {
        const response = await fetchToken(getListingURL);
        console.log(response);
        const details = await response.json();
/*         console.log(typeof details.endsAt.split('-'));
        console.log(typeof parseInt(details.endsAt)); */

        const event = new Date(details.endsAt);
        console.log(details.endsAt.toLocaleString());
        //const event = new Date(details.endsAt);
   /*      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: "numeric" };
        console.log(event.toLocaleDateString("en-EG",options)); */
        console.log(event.toLocaleString());
    
    

      
//////////////////////



 
//////////////////////
        
        document.title = details.title;

        const postContainer = document.querySelector(".post-container");

        /*  postContainer.innerHTML = `<h1>${details.title}</h1>
                             <p>${details.body}</p>`;
 
  */
        postContainer.innerHTML = `<a class="post" href = "/">
                                        <div data-end = ${details.endsAt} class="card">
                                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left">
                                                <div class="card-top">
                    
                                                    <h5 class="card-title">${details.title}</h5>
                    
                                                    <div class="card-details">
                                                        <p class="fs-6 text-left">
                                                            <i class="fa-solid fa-pen"></i>
                                                            ${details.body}
                                                        </p>
                                                        <div class="post-image">
                                                          <img src="${details.media}" class="img-thumbnail rounded mb-2" alt="${details.title}">
                                                        </div>
                                                        <small class="mb-3">
                                                            <i class="fa-solid fa-calendar-days"></i>
                                                           
                                                            ${details.created.toLocaleString().split('T')}
                                                        </small>
                                                    </div>
                                                </div>
                                                     <section id="count-down-section" data-count ="count">
                                                                    <div class="countdown-wrapper">
                                                                        <div class="countdown-container" id="countNextLaunch">
                                                                            <h3>Time Left<i class="fa-solid fa-timer"></i></h3>
                                                                            <div class="countdown" id="countdown">
                                                                                <div class="time">
                                                                                    <p id="days"></p>
                                                                                    <small>days</small>
                                                                                </div>
                                                                                <div class="time">
                                                                                    <p id="hours"></p>
                                                                                    <small>hours</small>
                                                                                </div>
                                                                                <div class="time">
                                                                                    <p id="minutes"></p>
                                                                                    <small>minutes</small>
                                                                                </div>
                                                                                <div class="time">
                                                                                    <p id="seconds"></p>
                                                                                    <small>seconds</small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                  </section>
                                                <a href="/post/edit/index.html" class="btn btn-primary btn-danger">Place Bid</a>
                                            </div>
                                        </div>
                                 </a> `
 

        remaining(details);

    } catch (error) {
        /*  displayMessage("error", error, ".detail-container"); */
    }

   
};

