const notOccupiedSeats = document.querySelectorAll(".row .seat:not(.occupied)");
// console.log(notOccupiedSeats);
const movieSelectBox = document.querySelector("#movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const container = document.querySelector(".container");
let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;
console.log(price);
window.addEventListener("load",()=> {
    displayUI();
    updateMovieInfo(price);
});

const displayUI = () => {
    const selectedSeatsFromStorage = JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(selectedSeatsFromStorage);
    if(selectedSeatsFromStorage !== null && selectedSeatsFromStorage.length>0){
        notOccupiedSeats.forEach((seat, index) =>{
            if(selectedSeatsFromStorage.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }
};

movieSelectBox.addEventListener("change", (e)=> {
    updateMovieInfo(e.target.value);

});

container.addEventListener("click", e =>{
    console.log(e.target);

    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected"); 
        // e.target.classList.add("selected");       
    }
    updateMovieInfo(price);
});

const updateMovieInfo = (filmPrice)=>{
    let selectedSeats = document.querySelectorAll(".row .selected");
    //OCCUPİED OLMAYANLARA GÖRE SELECTED SEATLERİN İNDEXLERİNİ TUTAN ARRAY//
    const seatIndexArray = [...selectedSeats].map(seat => [...notOccupiedSeats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatIndexArray));
    

    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split(" ( ")[0];
    // console.log(film.innerText);
    total.innerText = selectedSeatCount * parseFloat(filmPrice);
}


