

import { API_AUCTION_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";
import { remainingAll } from "../../ui/allCountDown.js";

const action = "/listings";
const getListingsURL = `${API_AUCTION_URL}${action}`;


export async function read() {
   
    const postsContainer = document.querySelector(".posts-container");
   
    try {
      
        const response = await fetchToken(getListingsURL)
       
        const json = await response.json();
        //console.log(json[1].endsAt);

        const event = new Date(json.endsAt);
   

        postsContainer.innerHTML = "";

        json.forEach(function (post) {

            postsContainer.innerHTML +=
                `<a class="post" href = "/post/detail/index.html?id=${post.id}">
                        <div class="card">
                            <div class="card-body text-start overflow-hidden d-flex flex-column align-items-left">
                                <div class="card-top">
    
                                    <h5 class="card-title">${post.title}</h5>
    
                                    <div class="card-details">
                                        <p class="fs-6 text-left">
                                            <i class="fa-solid fa-pen"></i>
                                            ${post.description}
                                        </p>
                                       
                                        <small>
                                            <i class="fa-solid fa-calendar-days"></i>
                                            ${post.created.toLocaleString().split('T')}
                                        </small>
                                    </div>
                                  
                                     <div class="post-image">
                                            <img src="${post.media}" class="img-fluid rounded" alt="${post.title}">
                                     </div>
                                    
                                </div>
                             
                                 <section id="count-down-section" data-count ="count">
                                      <div class="countdown-wrapper">
                                         <div class="countdown-container" id="countNextLaunch">
                                           <p>Time Left<i class="fa-solid fa-timer"></i></p>
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
                                <a href="/post/detail/index.html?id=${post.id}" class="btn btn-primary">Read More</a>
                            </div>                     
                        </div>
                     </a> `

          remaining(post);  
            
        });
      
    } catch (error) {
        console.log(error);

    }

};

