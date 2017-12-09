var box, intervalID;
function init() {
	box = document.getElementById('box');
	box.style.left = box.style.left || '100px';
	box.style.top = box.style.top || '100px';
}
init();

function keydown(){
	switch(event.keyCode){
        case 37:
			if(box.style.left !== '525px'){
				box.style.left = getNewPixelValue(box.style.left, -25);
			}		
			break;
		case 38:
			box.style.top = getNewPixelValue(box.style.top, -25);
			break;
		case 39: 
			if(box.style.left !== '450px'){
				box.style.left = getNewPixelValue(box.style.left, 25);
			}
			var h = getNumberValue(box.style.top);
			if(h < 75){
				box.style.left = getNewPixelValue(box.style.left, 25);
			}
			break;
		case 40:
			box.style.top = getNewPixelValue(box.style.top, 25);
			break;
		case 13:
			clearInterval(intervalID);
			break;
	}
}
function getNewPixelValue(value, newValue){
	var result = Number.parseInt(value.replace('px',''));
	result += newValue;
	return result + 'px';
}
function getNumberValue(value){
	return Number.parseInt(value.replace('px',''));
}

intervalID = window.setInterval(boxGravitate, 500);

function boxGravitate(){
	box.style.top = getNewPixelValue(box.style.top, 25);
}
