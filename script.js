var box, intervalID, intervalActive = true;
function init() {
	box = document.getElementById('box');
	box.style.left = box.style.left || '50px';
	box.style.top = box.style.top || '100px';
}
init();
function keydown(){
	switch(event.keyCode){
        case 37: // left
			if(isBoxPositionLegal(getNumberValue(box.style.top), getNumberValue(box.style.left) - 5)) {
				box.style.left = getNewPixelValue(box.style.left, -5);
			} 	
			break;
		case 38: // up
		   if(isBoxPositionLegal(getNumberValue(box.style.top) - 5, getNumberValue(box.style.left))) {
				box.style.top = getNewPixelValue(box.style.top, -5);
		   }
			break;
		case 39: // right
		   if(isBoxPositionLegal(getNumberValue(box.style.top), getNumberValue(box.style.left) + 5)){
				box.style.left = getNewPixelValue(box.style.left, 5);
		   }
			break;
		case 40: // down
		    if(isBoxPositionLegal(getNumberValue(box.style.top) + 5, getNumberValue(box.style.left))){
				box.style.top = getNewPixelValue(box.style.top, 5);
			}
			break;
		case 13: // enter
		if(intervalActive){
			clearInterval(intervalID);
		} else {
			intervalID = window.setInterval(boxGravitate, 500);
		}
		intervalActive = !intervalActive;
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
	//box.style.top = getNewPixelValue(box.style.top, 25);
}
var coordinate = newArray();
 
function createWall(top, left, width, height, background){
	var newDiv = document.createElement('div'); 
	newDiv.style.top = top;
	newDiv.style.left = left;
	newDiv.style.width = width;
	newDiv.style.height = height;
	newDiv.style.background = background;
	newDiv.style.position = 'absolute';
	document.body.appendChild(newDiv);		
}
newWalls();

function newWalls(){
	for(var i=0; i < coordinate.length; i++){
		createWall(coordinate[i].top, coordinate[i].left, coordinate[i].width, coordinate[i].height, coordinate[i].background);
	}
 	
}
function newArray() {
	var result = [];
	for(var i = 0; i < 3; i++){
	  result[i] =  {
			top: Math.round(Math.random() * 150) +'px',
			left: 150 + (i * 150) +'px',
			width: '10px',
			height: Math.round((Math.random() + 0.3) * 450) +'px',
			background:'blue'
		};
	}
	return result;
}


function isBoxPositionLegal(top, left) {	
	var myArray = []
	for(var i = 0; i < coordinate.length; i++){
		myArray[i] = isSafe(coordinate[i], top, left)
	}
	for(var i = 0; i < myArray.length; i++){
		if(!myArray[i]) {
			return false;
		}
	}
	return true;
	 
}	  

function isSafe(wall,top, left){
	var wallTop = getNumberValue(wall.top);
	var wallLeft = getNumberValue(wall.left);
	var wallHeight = getNumberValue(wall.height);
	var wallWidth = getNumberValue(wall.width);
	
    if((left + 50 < wallLeft || left > wallLeft + wallWidth) || (top + 50 < wallTop ||top >  wallTop + wallHeight)){
	   return true;
    }
    return false;	
}

