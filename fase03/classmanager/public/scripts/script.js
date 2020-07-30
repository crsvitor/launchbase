<<<<<<< HEAD
const currentPage = window.location.pathname;
const headItems = document.querySelectorAll(".links a");

for (const item of headItems) {
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.toggle("active");
    }
}


// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function() {
//       console.log("selected");
//       const id= card.getAttribute("id");
//       console.log(id);
//       window.location.href = `/recipes/${id}`;
//     });
// }

// const cardsText = document.querySelectorAll(".cardText");

// for (const cardText of cardsText) {

//     (cardText.querySelector("p")).addEventListener("click", function(){

//       const insideText = cardText.querySelector("p").textContent;
//       const changeText = insideText == "MUDAR" ? "ESCONDER" : "MUDAR";
//       cardText.querySelector("p").textContent = changeText;

//       (cardText.querySelector(".change-space")).classList.toggle("active");
//   });


// }






// //const modalOverlay = document.querySelector('.modal-overlay');

// // const modalOverlay = document.querySelector('.modal-overlay');
// // const cards = document.querySelectorAll('.card');

// // for (const card of cards) {
// //     card.addEventListener("click", function() {
// //         const fotoId = card.querySelector("img").getAttribute("src");
// //         const foodTitle = card.querySelector("h3").textContent;
// //         const by = card.querySelector("p").textContent;
// //         modalOverlay.classList.add("active");
       
// //         modalOverlay.querySelector("img").src = fotoId;
// //         modalOverlay.querySelector(".nome").textContent = foodTitle;
// //         modalOverlay.querySelector(".autor").textContent = by;

// //     })
// // }

// // modalOverlay.querySelector(".modal-close").addEventListener("click", function () {
// //     modalOverlay.classList.remove("active");
=======
const currentPage = window.location.pathname;
const headItems = document.querySelectorAll(".links a");

for (const item of headItems) {
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.toggle("active");
    }
}


// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function() {
//       console.log("selected");
//       const id= card.getAttribute("id");
//       console.log(id);
//       window.location.href = `/recipes/${id}`;
//     });
// }

// const cardsText = document.querySelectorAll(".cardText");

// for (const cardText of cardsText) {

//     (cardText.querySelector("p")).addEventListener("click", function(){

//       const insideText = cardText.querySelector("p").textContent;
//       const changeText = insideText == "MUDAR" ? "ESCONDER" : "MUDAR";
//       cardText.querySelector("p").textContent = changeText;

//       (cardText.querySelector(".change-space")).classList.toggle("active");
//   });


// }






// //const modalOverlay = document.querySelector('.modal-overlay');

// // const modalOverlay = document.querySelector('.modal-overlay');
// // const cards = document.querySelectorAll('.card');

// // for (const card of cards) {
// //     card.addEventListener("click", function() {
// //         const fotoId = card.querySelector("img").getAttribute("src");
// //         const foodTitle = card.querySelector("h3").textContent;
// //         const by = card.querySelector("p").textContent;
// //         modalOverlay.classList.add("active");
       
// //         modalOverlay.querySelector("img").src = fotoId;
// //         modalOverlay.querySelector(".nome").textContent = foodTitle;
// //         modalOverlay.querySelector(".autor").textContent = by;

// //     })
// // }

// // modalOverlay.querySelector(".modal-close").addEventListener("click", function () {
// //     modalOverlay.classList.remove("active");
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
// // })