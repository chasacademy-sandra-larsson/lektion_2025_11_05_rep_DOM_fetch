// DOM variabler 
const openModalBtn = document.getElementById("open-modal");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.getElementById("close-modal");

function openModal() {
    // Lägg till klassen "show" i modal-container
    modalContainer.classList.add("show");

}

function closeModal() {
    // Ta bort klassen "show" i modal-container
    modalContainer.classList.remove("show");
}


function closeContainer(event) {
    
    // Klickar vi på modal-container?
    if(event.target === modalContainer) {
        closeModal();
    } 

}


// Eventlyssnare 
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", closeContainer);




