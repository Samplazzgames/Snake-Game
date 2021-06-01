
var snake;
var apple;

function preload()
{
	
}

function setup(){
	canvas = createCanvas(200, 200);
	  
}



	
	
	
	
	function draw(){
		rng_number_x = Math.round(random(1 , 21))
		rng_number_y = Math.round(random(1 , 21))
		apple = rect(rng_number_x * 10 , rng_number_y * 10 , 5 , 5);
		apple.shapeColor('RED');
	
		apple.display()
	}
 



