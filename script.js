let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    currentSlideIndex++;
    if (currentSlideIndex > slides.length) { currentSlideIndex = 1; }
    
    slides[currentSlideIndex - 1].classList.add("active");
    dots[currentSlideIndex - 1].classList.add("active");
    
    setTimeout(showSlides, 5000); 
}

setTimeout(showSlides, 0);

function currentSlide(index) {
    currentSlideIndex = index;
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[currentSlideIndex].classList.add("active");
    dots[currentSlideIndex].classList.add("active");
}

function filterCategory(category) {
    const items = document.querySelectorAll(".accordion-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function toggleAccordion(header) {
    const item = header.parentElement;
    const panel = header.nextElementSibling;

    item.classList.toggle("open");

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

const faqToggleBtn = document.getElementById("faqToggleBtn");
const faqContent = document.getElementById("faqContent");

faqToggleBtn.addEventListener("click", function() {
    faqContent.classList.toggle("hidden");
});