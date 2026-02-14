const startBtn = document.getElementById("btn");
const questionA = document.getElementById("a");
const questionB = document.getElementById("b");
const questionC = document.getElementById("c");
const questionD = document.getElementById("d");
const questionE = document.getElementById("e");
const field = document.getElementById("f");
const answer = document.getElementById("field");
const validAnswer = document.getElementById("valid");
const video = document.getElementById("video");
const errorTxt = document.getElementById("error");

function revealQuestion(item, lastQuestion, timer) {
	setTimeout(() => {
		item.classList.add("reveal");

		if (lastQuestion) {
			field.classList.add("reveal");
		}
	}, timer);
}

startBtn.addEventListener("click", () => {
	startBtn.classList.add("blurin");
	revealQuestion(questionA, false, 0);
	revealQuestion(questionB, false, 7000);
	revealQuestion(questionC, false, 14000);
	revealQuestion(questionD, false, 21000);
	revealQuestion(questionE, true, 28000);
});

window.addEventListener("load", () => console.log("chargement effectué"));

validAnswer.addEventListener("click", async () => {
	const value = answer.value;

	if (value.includes("bite") && value.includes("couleur")) {
		try {
			video.classList.remove("hide");
			// Lancer la lecture
			await video.play();

			// Passer en plein écran
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.webkitRequestFullscreen) {
				// Safari
				video.webkitRequestFullscreen();
			} else if (video.msRequestFullscreen) {
				// IE11
				video.msRequestFullscreen();
			}
		} catch (err) {
			console.error("Erreur :", err);
		}
	} else {
		errorTxt.classList.add("reveal");

		setTimeout(() => {
			errorTxt.classList.remove("reveal");
		}, 3000);
	}
});
