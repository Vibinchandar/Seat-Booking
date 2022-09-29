'use strict';

// select elements
const moviesEl = document.getElementById("movies");
const screenContainerEl = document.querySelector(".screen-container");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");

// global variables
let ticketPrice = Number(moviesEl.value);
let seatCount = 0;
let totalPrice = 0;

// functions
const populateUI = function(){
    countEl.innerText = seatCount;
    totalEl.innerText = seatCount * ticketPrice;
};

// eventListeners
moviesEl.addEventListener('change', function(){
    ticketPrice = Number (moviesEl.value);
    populateUI();
});

screenContainerEl.addEventListener('click', function(e){
    if(e.target.classList.contains('seat')){
        if(!e.target.classList.contains('occupied')){
            e.target.classList.toggle('selected');
            const selectedSeatsEl = document.querySelectorAll('.row .seat.selected');
            seatCount = selectedSeatsEl.length;
            populateUI();
        }
    }
});





