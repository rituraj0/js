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

var but = document.querySelector('button');
but.onclick = function()
					{
						var name = prompt("Eneter your name");
						document.querySelector('h1').innerHTML = name;
					}