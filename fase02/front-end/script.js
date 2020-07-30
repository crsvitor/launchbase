<<<<<<< HEAD
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener("click", function(){
        console.log(card);
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active'); //add or toggle
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove("active"); //remove or toggle
    modalOverlay.querySelector("iframe").src = "";
});



// redoing, practicing
// const modalOverlay2 = document.querySelector(".modal-overlay");
// const cards2 = document.querySelectorAll(".card");

// for (const card of cards2) {
//     card.addEventListener("click", function() {
//         const videoId = card.getAttribute("id");
//         modalOverlay2.classList.toggle("active");
//         modalOverlay2.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
//     })
    
// }

// document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay2.classList.toggle("active");
//     modalOverlay2.querySelector("iframe").src = ``;
// });
=======
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener("click", function(){
        console.log(card);
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active'); //add or toggle
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove("active"); //remove or toggle
    modalOverlay.querySelector("iframe").src = "";
});



// redoing, practicing
// const modalOverlay2 = document.querySelector(".modal-overlay");
// const cards2 = document.querySelectorAll(".card");

// for (const card of cards2) {
//     card.addEventListener("click", function() {
//         const videoId = card.getAttribute("id");
//         modalOverlay2.classList.toggle("active");
//         modalOverlay2.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
//     })
    
// }

// document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay2.classList.toggle("active");
//     modalOverlay2.querySelector("iframe").src = ``;
// });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
