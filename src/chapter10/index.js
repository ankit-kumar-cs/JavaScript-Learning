function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		
		ctx.beginPath();
    	ctx.arc(75, 75, 50, 0, Math.PI * 2);
    	ctx.moveTo(115, 75);
		ctx.arc(75, 75, 40, 0, Math.PI); 
		ctx.moveTo(60, 60);
		ctx.arc(60, 60, 5, 0, Math.PI * 2); 
		ctx.moveTo(55, 60);
		ctx.arc(95, 60, 5, 0, Math.PI * 2); 
		ctx.moveTo(95, 50);
    	ctx.stroke();
	}
}

draw();
