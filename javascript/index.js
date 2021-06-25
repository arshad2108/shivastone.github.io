document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		
		
	} else {
		document.querySelector(
		  "#preload").style.display = "none";
		document.getElementById("loaded").style.display = "block";
	}
};

function sleep(time) {
	return new Promise(resolve => setTimeout(resolve, time));
 }
 function transit(w){
	
	
	document.getElementById(w).className="animated fadeOutRight";


 }

function navigate(id){
// Get all buttons with class="btn" inside the container


// Loop through the buttons and add the active class to the current/clicked button

	
	
		var current = document.getElementsByClassName("active");
		
		var past=current[0].id;
		current[0].className = "";
		var w=past.slice(4);
		
		
		var obj=document.getElementById(id);
		
		
		obj.className ="active";
		var cur=obj.id;
		var v=cur.slice(4);
		transit(w);
		setTimeout(function() {
			//console.log("waiting");
			document.getElementById(w).style.display="none";
		document.getElementById(v).style.display="block";
		
		
		document.getElementById(v).className="animated fadeInLeft";
			
		}, 550 );
		
		
		//document.getElementById(w).style.display="none";
		//console.log("completed");
		
		
		
		


		

}
