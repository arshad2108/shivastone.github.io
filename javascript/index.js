
function navigate(obj){
// Get all buttons with class="btn" inside the container
var btns = document.getElementsByTagName("ul");

// Loop through the buttons and add the active class to the current/clicked button

	
	
		var current = document.getElementsByClassName("active");
		
		var past=current[0].id;
		current[0].className = "";
		var w=past.slice(4);
		
		
		
		document.getElementById(w).style.display="none";
		obj.className ="active";
		var cur=obj.id;
		var v=cur.slice(4);
		
		
		document.getElementById(v).style.display="block";
		


		

}
