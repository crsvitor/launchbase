<<<<<<< HEAD
const currentPage = window.location.pathname;
const headItems = document.querySelectorAll(".links a");

for (const item of headItems) {
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.toggle("active");
    }
}

function paginate(selectedPage, totalPages) {
    
    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2;

        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if(oldPage && currentPage - oldPage > 2) {
                pages.push("...");
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1);
            }
            
            pages.push(currentPage);

            oldPage = currentPage;
        }
    }
    
    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter;
    const page = Number(pagination.dataset.page);
    const total = Number(pagination.dataset.total);

    const pages = paginate(page, total);

    let elements = "";

    for (let page of pages) {
        if(String(page).includes("...")) {
            elements += `<span>${page}</span>`;
        } else {
            if(filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`;
            } else {
                elements += `<a href="?page=${page}">${page}</a>`;
            }
        }
    }

    pagination.innerHTML = elements;
}

const pagination = document.querySelector(".pagination");

if(pagination) {
    createPagination(pagination);
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

function paginate(selectedPage, totalPages) {
    
    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2;

        if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if(oldPage && currentPage - oldPage > 2) {
                pages.push("...");
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1);
            }
            
            pages.push(currentPage);

            oldPage = currentPage;
        }
    }
    
    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter;
    const page = Number(pagination.dataset.page);
    const total = Number(pagination.dataset.total);

    const pages = paginate(page, total);

    let elements = "";

    for (let page of pages) {
        if(String(page).includes("...")) {
            elements += `<span>${page}</span>`;
        } else {
            if(filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`;
            } else {
                elements += `<a href="?page=${page}">${page}</a>`;
            }
        }
    }

    pagination.innerHTML = elements;
}

const pagination = document.querySelector(".pagination");

if(pagination) {
    createPagination(pagination);
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