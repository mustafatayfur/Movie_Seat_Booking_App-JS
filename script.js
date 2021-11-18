const notOccupiedSeats = document.querySelectorAll(".row .seat:not(.occupied)");
// console.log(notOccupiedSeats);
const movieSelectBox = document.querySelector("#movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const container = document.querySelector(".container");

movieSelectBox.addEventListener("change", (e)=> {
    updateMovieInfo(e.target.value);

});

const updateMovieInfo = (filmPrice)=>{
    let selectedSeats = document.querySelectorAll(".row .seat .selected");


    const seatIndexArray = [...selectedSeats].map(seat => [...notOccupiedSeats].indexOf(seat));

}