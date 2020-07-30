<<<<<<< HEAD
// const modalOverlay = document.querySelector(".modal-overlay");
const courses = document.querySelectorAll(".card");
const closeModal = document.querySelector('.close-modal');
console.log(closeModal);
console.log(courses);

for (const course of courses) {
    console.log(course);
    course.addEventListener("click", function () {
        const courseId = course.getAttribute("id");
        window.location.href = `/content/${courseId}`;
        //modalOverlay.classList.toggle("active");
        //modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`;
    })
}

// closeModal.addEventListener("click", function () {
//     modalOverlay.classList.remove("active"); //remove or toggle
//     modalOverlay.querySelector("iframe").src = "";
//     document.querySelector(".modal").classList.remove("maximize2"); //remove or toggle
// });

// document.querySelector('.maximize').addEventListener("click", function () {
//     document.querySelector(".modal").classList.toggle("maximize2"); //remove or toggle
// });
=======
// const modalOverlay = document.querySelector(".modal-overlay");
const courses = document.querySelectorAll(".card");
const closeModal = document.querySelector('.close-modal');
console.log(closeModal);
console.log(courses);

for (const course of courses) {
    console.log(course);
    course.addEventListener("click", function () {
        const courseId = course.getAttribute("id");
        window.location.href = `/content/${courseId}`;
        //modalOverlay.classList.toggle("active");
        //modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`;
    })
}

// closeModal.addEventListener("click", function () {
//     modalOverlay.classList.remove("active"); //remove or toggle
//     modalOverlay.querySelector("iframe").src = "";
//     document.querySelector(".modal").classList.remove("maximize2"); //remove or toggle
// });

// document.querySelector('.maximize').addEventListener("click", function () {
//     document.querySelector(".modal").classList.toggle("maximize2"); //remove or toggle
// });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
