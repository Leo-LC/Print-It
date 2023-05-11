const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const arrows = document.querySelectorAll(".arrow");

const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");

let currentSlideIndex = 0;

// Ajout des dots dynamiquement
function addDots() {
	for (let i = 0; i < slides.length; i++) {
		const dotsDiv = document.querySelector(".dots-div");
		const dot = document.createElement("span");
		dot.classList.add("dot");

		// Toggle la classe dot_selected sur le dot courant si i === currentSlideIndex
		dot.classList.toggle("dot_selected", i === currentSlideIndex);

		dotsDiv.appendChild(dot);
	}
}
addDots();

function handleClick(direction) {
	switchSlide(direction);
	switchDots(direction);
}

// Ajout des events sur les flèches
arrows.forEach((arrow) => {
	arrow.addEventListener("click", (event) => {
		const direction = event.target.classList.contains("arrow_right")
			? "next"
			: "previous";
		handleClick(direction);
	});
});

function switchSlide(direction) {
	if (direction === "next") {
		currentSlideIndex =
			currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
	} else if (direction === "previous") {
		currentSlideIndex =
			currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
	}

	const currentSlide = slides[currentSlideIndex];
	bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
	bannerText.innerHTML = currentSlide.tagLine;
}

function switchDots(direction) {
	const dots = document.querySelectorAll(".dot");
	const dotSelected = document.querySelector(".dot_selected");
	const nextDot = dotSelected.nextElementSibling;
	const previousDot = dotSelected.previousElementSibling;

	dotSelected.classList.remove("dot_selected");

	if (direction === "next") {
		nextDot
			? nextDot.classList.add("dot_selected")
			: dots[0].classList.add("dot_selected");
	} else if (direction === "previous") {
		previousDot
			? previousDot.classList.add("dot_selected")
			: dots[dots.length - 1].classList.add("dot_selected");
	}
}
