function Greetings() {
	let timing = prompt("whats time is it (enter in 24hrs format)");
	const thetime = parseInt(timing);
	const wishes = [
		{ text: "morning", color: "red" },
		{ text: "afternoon", color: "green" },
		{ text: "evening", color: "maroon" },
		{ text: "night", color: "blue" },
	];

	let index;
	if (thetime >= 5 && thetime < 12) {
		index = 0;
	} else if (thetime >= 12 && thetime < 18) {
		index = 1;
	} else if (thetime >= 18 && thetime < 21) {
		index = 2;
	} else {
		index = 3;
	}

  return (
    <>
    <h1 style={{color:wishes[index].color}}>
      Good {wishes[index].text}
    </h1>
    </>
  )
}

export default Greetings;
