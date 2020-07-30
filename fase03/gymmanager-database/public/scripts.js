const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.toggle("active");
    }
}

// Paginação
// totalPages = 20
// selectedPage = 16
// [1, ..., 14, 15, 16, 17, 18, 19, 20]
// slectedPage = 15
// [1, ..., 13, 14, 15, 16, 17, ..., 20]

function paginate(selectedPage, totalPages) {

    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
        
        // adiciona o número 1 e o último, e imprime a união das duas condicionais
        if( firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage ) {
            if (oldPage && currentPage - oldPage > 2) {
                console.log(currentPage - oldPage);
                pages.push("...");                
            }

            if (oldPage && currentPage - oldPage == 2 ) {
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
        if (String(page).includes("...")) {
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

if (pagination) {
    createPagination(pagination)
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



