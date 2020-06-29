let [i, del] = [0, false];

setInterval(() => {
	let elem = document.createElement("div");
	[elem.id, elem.style.position, elem.style.top, elem.style.left, elem.style.width, elem.style.height, elem.style.backgroundColor] = [
		"elem"+i,
		"absolute",
		Math.random() * 100 + "%",
		Math.random() * 100 + "%",
		Math.random() * 40 + "%",
		Math.random() * 40 + "%",
		"rgba("+parseInt(Math.random()*10000%256)+" "+parseInt(Math.random()*10000%256)+" "+parseInt(Math.random()*10000%256)+" / "+parseInt(parseInt(Math.random()*50)+50)+"%)"
	];
	document.body.appendChild(elem);
	i++;
	if (i == 100) {
		i = 0;
		del = true;
	}
	if (del == true) {
		let how = i == 0 ? 99 : i-1;
		document.querySelector("#elem"+how).remove();
	}
}, 100);