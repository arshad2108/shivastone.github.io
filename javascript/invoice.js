function myPreview() {

		var consigneename = document.getElementById("consigneename").value;
		var consig_add = document.getElementById("consig_add").value;
		var consig_gst = document.getElementById("consig_gst").value;
		var consignee_state = document.getElementById("consignee_state").value;
		var buyername = document.getElementById("buyername").value;
		var buyer_add = document.getElementById("buyer_add").value;
		var buyer_gst = document.getElementById("buyer_gst").value;
		var buyer_state = document.getElementById("buyer_state").value;
		var quantity = document.getElementById("quantity").value;
		var rate = document.getElementById("rate").value;
		
		
		

		document.getElementById("inv_consig_name").innerHTML=""+consigneename+"";
		document.getElementById("inv_consig_add").innerHTML=""+consig_add+"";
		document.getElementById("inv_consig_gst").innerHTML=""+consig_gst+"";
		document.getElementById("inv_consig_state").innerHTML=""+consignee_state+"";

		document.getElementById("inv_buyer_name").innerHTML=""+buyername+"";
		document.getElementById("inv_buyer_add").innerHTML=""+buyer_add+"";
		document.getElementById("inv_buyer_gst").innerHTML=""+buyer_gst+"";
		document.getElementById("inv_buyer_state").innerHTML=""+buyer_state+"";

		document.getElementById("inv_quantity").innerHTML=""+quantity+"";
		document.getElementById("inv_rate").innerHTML=""+rate+"";

		var sumcost=quantity*rate;
		var tax=sumcost*0.05;
		var ctax=tax*0.5;
		var stax=tax*0.5;
		var total=tax+sumcost;

		document.getElementById("inv_sumcost").innerHTML=""+sumcost+"";
		document.getElementById("inv_tax").innerHTML=""+tax+"";
		document.getElementById("inv_total").innerHTML=""+total+"";
		document.getElementById("inv_tx_sumtotal").innerHTML=""+sumcost+"";
		document.getElementById("inv_tx_ctax").innerHTML=""+ctax+"";
		document.getElementById("inv_tx_stax").innerHTML=""+stax+"";
		document.getElementById("inv_tx_tax").innerHTML=""+tax+"";
		document.getElementById("inv_tx_final").innerHTML=""+total+"";
		
	return;
}
function showOptions(str){
	

		if (str=="Yes"){
			document.getElementById("buyer_part").style.display="block";
			document.getElementById("buyername").value=document.getElementById("consigneename").value;
			document.getElementById("buyer_add").value=document.getElementById("consig_add").value;
			document.getElementById("buyer_gst").value=document.getElementById("consig_gst").value;
			document.getElementById("buyer_state").value=document.getElementById("consignee_state").value;
			
			}
			if (str=="No"){
			document.getElementById("buyer_part").style.display="block";
			}
	return;

}

function mySubmit(){
	document.getElementById("forminside").style.display="none";
	document.getElementById("customdiv3").style.display="block";
	return;

}

function myPrint(){
	document.getElementById("verify").style.display="block";
	document.getElementById("printbutton").style.display="none";
	document.getElementById("proceedbutton").style.display="block";
	return;
}

function myProceed(){
	var pwd=document.getElementById("pwd").value;
	if(pwd=="Shiva@786"){
		document.getElementById("proceedbutton").style.display="none";
		document.getElementById("navigation").style.display="none";
		document.getElementById("verify").style.display="none";
		document.getElementById("prompt").style.display="none";
		window.print()
		window.location.replace("index.html");


	}
	else{
		document.getElementById("prompt").style.display="block"
		document.getElementById("prompt").innerHTML="Wrong Password, try again";
		document.getElementById("pwd").value="";

	}
}
