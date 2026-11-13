const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des éléments HTML

const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
const conteneurPoints = document.querySelector(".dots");
const imageBanniere = document.querySelector(".banner-img");
const texteBanniere = document.querySelector("#banner p");

// Position de la slide affichée (0 = première imag)

let indexActuel = 0;

// Création des bullet points 
/* Autant de point qu'il y a de sliders pour que le nombre de points s'adapte 
automatiquement au tableau */ 

for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	point.classList.add("dot");

	if (i === 0) {
		point.classList.add("dot_selected");
	}

	conteneurPoints.appendChild(point);
}

// On récupère les points après leur création 

const points = document.querySelectorAll(".dot");

// Met à jour le slider selon l'index actuel

function afficherSlide() {
	const slide = slides[indexActuel];

	imageBanniere.src = `./assets/images/slideshow/${slide.image}`;
	texteBanniere.innerHTML = slide.tagLine;

	// Seul le point correspondant à la diapositive actuelle reçoit "dot_selected"

	points.forEach((point, index) => {
		point.classList.toggle("dot_selected", index === indexActuel);
	});
}

// On écoute l'évènement au clic pour passer à la slide suivante
flecheDroite.addEventListener("click", () => {
	indexActuel++;

	/* On met en place, le défilement infini, après la dernière image, 
	on repasse à la première */ 

	if (indexActuel === slides.length) {
		indexActuel = 0;
	}

	afficherSlide();
});

//On écoute l'évènement au clic pour passer à la slide précédente

flecheGauche.addEventListener("click", () => {
	indexActuel--;

	/* On met en place, le défilement infini, avant la première image,
	on passe à la dernière */ 

	if (indexActuel < 0) {
		indexActuel = slides.length - 1;
	}

	afficherSlide();
});