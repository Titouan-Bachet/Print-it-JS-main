const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
const conteneurPoints = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	point.classList.add("dot");

	if (i === 0) {
		point.classList.add("dot_selected");
	}

	conteneurPoints.appendChild(point);
}

let indexActuel = 0;

const imageBanniere = document.querySelector(".banner-img");
const texteBanniere = document.querySelector("#banner p");
const points = document.querySelectorAll(".dot");

function afficherSlide() {
	const slide = slides[indexActuel];

	imageBanniere.src = `./assets/images/slideshow/${slide.image}`;
	texteBanniere.innerHTML = slide.tagLine;

	points.forEach((point, index) => {
		point.classList.toggle("dot_selected", index === indexActuel);
	});
}


flecheDroite.addEventListener("click", () => {
	indexActuel++;

	if (indexActuel === slides.length) {
		indexActuel = 0;
	}

	afficherSlide();
});

flecheGauche.addEventListener("click", () => {
	indexActuel--;

	if (indexActuel < 0) {
		indexActuel = slides.length - 1;
	}

	afficherSlide();
});