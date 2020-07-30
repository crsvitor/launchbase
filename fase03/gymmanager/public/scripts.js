<<<<<<< HEAD
const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.toggle("active");
    }
}















// const modalOverlay = document.querySelector('.modal-overlay');
// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function(){
//         console.log(card);
//         const videoId = card.getAttribute("id");
//         window.location.href = `/video?id=${videoId}`; //add or toggle
//     });
// }


// past code
// const modalOverlay = document.querySelector('.modal-overlay');
// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function(){
//         console.log(card);
//         const videoId = card.getAttribute("id");
//         modalOverlay.classList.add('active'); //add or toggle
//         modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
//     })
// }

// document.querySelector('.close-modal').addEventListener("click", function () {
//     modalOverlay.classList.remove("active"); //remove or toggle
//     modalOverlay.querySelector("iframe").src = "";
// });



=======
const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.toggle("active");
    }
}















// const modalOverlay = document.querySelector('.modal-overlay');
// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function(){
//         console.log(card);
//         const videoId = card.getAttribute("id");
//         window.location.href = `/video?id=${videoId}`; //add or toggle
//     });
// }


// past code
// const modalOverlay = document.querySelector('.modal-overlay');
// const cards = document.querySelectorAll('.card');

// for (const card of cards) {
//     card.addEventListener("click", function(){
//         console.log(card);
//         const videoId = card.getAttribute("id");
//         modalOverlay.classList.add('active'); //add or toggle
//         modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
//     })
// }

// document.querySelector('.close-modal').addEventListener("click", function () {
//     modalOverlay.classList.remove("active"); //remove or toggle
//     modalOverlay.querySelector("iframe").src = "";
// });



>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
