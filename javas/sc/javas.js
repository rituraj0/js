
var canvas = document.getElementById("canv");

clickX=[];
clickY=[];
last = 0;

histX=[];
histY=[];

console.log("Hello World");

function addClick(x,y)
{
	//console.log("in addclick ");
	clickX.push(x);
	clickY.push(y);

	histX.push(x);
	histY.push(y);
}


function draw_rect()
{
	 var can_context = canvas.getContext("2d");
	 //alert(can_context);
	 can_context.fillRect(50,50,50,50);
}

paint=false;


function clear_data()
{
	paint=false;
	clickY.length=0;
	clickX.length=0;
	last=0;

}
function redraw()
{
	//console.log( clickY.length);

	if( paint )
	 {
		var can_context = canvas.getContext("2d");
			can_context.strokeStyle = "#df4b26";
  			can_context.lineJoin = "round";
  			can_context.lineWidth = 5;

		for( var i = last; i< clickX.length ;i++)
			 {
			 	can_context.beginPath();

			 	if( i > 0)
			 	{
			 		can_context.moveTo( clickX[i-1] , clickY[i-1]);
			 	}
			 	else
			 	{
			 		can_context.moveTo( clickX[i] - 1 , clickY[i] );
			 	}

			 	can_context.lineTo( clickX[i] , clickY[i] );

			 	can_context.closePath();
			 	can_context.stroke()
			 }

		last = clickX.length;
	}
}

//- this.offsetLeft
// - this.offsetTop
// Add mouse and touch event listeners to the canvas


	var press = function (e) 
	{
		// Mouse down location
		var mouseX = e.pageX ,	mouseY = e.pageY ;

		paint = true;
		addClick(mouseX, mouseY);
		console.log("mouse DOWn");
		redraw();
	};

	var	drag = function (e) 
	{
			if (paint)
			{
				addClick(e.pageX , e.pageY);				
			}

			console.log(".");
			redraw();			
	};

	var	release = function () 
	{
			paint = false;
			console.log("mouse up event");
			redraw();
			clear_data();
	};

	var	cancel = function ()
	{
			paint = false;
			console.log("mouse out");
			clear_data();
			redraw();
	};

	// Add mouse event listeners to canvas element
	canvas.addEventListener("mousedown", press, false);
	canvas.addEventListener("mousemove", drag, false);
	canvas.addEventListener("mouseup", release);
	canvas.addEventListener("mouseout", cancel, false);

	console.log("in var main");



//alert("kya hai");
/*
console.log("logged");

function random(var x)
{
	return x*2;
}

function get_random()
{
	return random(10);
}
*/
//document.querySelector('h1').onclick = function() { document.querySelector('h1').innerHTML ="lol"; alert("changed"); };
/*
var image = document.querySelector('img');
image.onclick = function ()
 	   		     {
 				    if( image.getAttribute('src') === "/home/rituraj/github/javas/media/cc32.jpg" )
 					    { 
 					      image.setAttribute('src' , "/home/rituraj/github/javas/media/cf32.png" );
 					      alert( "1" + image.getAttribute('src')  );
 					    }

 					else if( image.getAttribute('src') ==="/home/rituraj/github/javas/media/cf32.png" )
 					   {

 					        image.setAttribute('src' , "/home/rituraj/github/javas/media/cc32.jpg" );
 					        alert( "2" + image.getAttribute('src')  );
 					   }
    				
    				alert( document.querySelector('img').src );
 				}

/*

document.querySelector('html').onclick = function() {
alert('Ouch! Stop poking me!');
}

*/
/*
var but = document.querySelector('button');
but.onclick = function()
					{
						var name = prompt("Eneter your name");
						document.querySelector('h1').innerHTML = name;
					}
*/

/*
console.log("logging into console");
*/

/*
var canvas = document.getElementById("canv");

//alert(canvas);

function draw_rect()
{
	 var can_context = canvas.getContext("2d");
	 //alert(can_context);
	 can_context.fillRect(50,50,50,50);
}
var but = document.querySelector('button');

//alert(but);
but.onclick = function()
					{
						alert("clicked");
						draw_rect();
					}
*/