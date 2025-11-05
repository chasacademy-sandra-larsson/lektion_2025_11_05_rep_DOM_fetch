// DOM variabler

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightBoxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");


function openFullImage(e) {

    // Kontroll att vi klickade på en bild
    if(e.target.tagName === "IMG") {
        // Visa lightboxen
        lightbox.classList.add("active");
        // Hämta bildadressen för stora bilden
        let fullImage = e.target.getAttribute("data-full");
        // Ange bildadressen för stora bilden ill lightbox:en
        lightBoxImage.setAttribute("src", fullImage);
    }

}

closeBtn.addEventListener("click", function() {
    lightbox.classList.remove("active");
})

lightbox.addEventListener("click", function(e) {
    if(e.target === lightbox) {
        lightbox.classList.remove("active");
    }
})


// Eventlisteners
gallery.addEventListener("click", openFullImage);


