let name = "";
const storyText = document.getElementById("text");
const choices = document.getElementById("choices");
const startButton = document.getElementById("start-button");
const nameInput = document.getElementById("name-input");
const reloadButton  = document.getElementById("reloadButton")

function updateStory(scene) {
	const chapter = story[scene];
	storyText.textContent = chapter.text;
	choices.innerHTML = ""
	chapter.choices.forEach(choice => {
		const button = document.createElement("button")
		button.textContent = choice.text;
		button.className = "button"
		button.onclick = () => updateStory(choice.next)
		choices.appendChild(button)
	})
}

startButton.onclick = () => {
	name = nameInput.value.trim()
  if (name) {
		nameInput.style.display = "none"
	  startButton.style.display = "none"
		story = generateStory(name);
		updateStory("start")	
}
	else {

		alert("How dare you not enter a NAME! Everyone is worth a name!")
		}}


const generateStory = (name) => {
	return {
	start: {
		text: `Once upon a time, ${name}, a powerful and strong person, was called upon to fight against the evil king of Syridos, and he had a choice of two weapons. Which one do you choose?`,
	 choices: [{text: "Sword", next: "nextSword"},{text: "Bow and 50 arrows", next: "nextBow_50_arrows"}]
		},
	nextSword: {
		text: `You decide to go with the sword. Going down the right path, you think that really quiet. Too quiet. Suddenly many, many zombies appear from the rooftop above. Will you fight them?`,
	 choices: [{text: "Fight Them", next: "nextFight_them"},{text: "Later"}]
	},
 nextBow_50_arrows: {
		text: `You choose the bow and pick up your 50 arrows. You adventure down the right path for hours until there's a NINJA ATTACK! You fight them for about three minutes before you run out of arrows and they take you their base. You wake up a jail cell, with no possible escapes. The end. Reload the page to try again!`
		},
 nextFight_them: {
	 text: `Choosing to fight, you charge at the zombies. You instinctively raise your sword above your head, when something goes wrong. You throw you sword. Miraculously, it slashed through all of the zombies, then flew back straight into your hand. It strangly feels as light as a feather.`
	},
	}
}
