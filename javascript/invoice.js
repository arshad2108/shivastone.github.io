function helptrim(x,n){
	var y=x*(Math.pow(10,n));
	
	
	var a=y.toString();
	var len=a.length;
	if (a.indexOf(".")!=-1){
		len=a.indexOf(".")

	}
	
	
	var w=a.slice(0,len);
	//console.log(w);
	var v=w.length;
	//console.log(v);
	
	var z=w.slice(0,v-n);
	//console.log(z);
	//console.log(w);
	var e=w.slice(v-n,v);
	//console.log(e);
	return z+"."+e;

}



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

		var no = document.getElementById("invoice_no").value;
		var date = document.getElementById("invoice_date").value;
		var permit = document.getElementById("permit").value;
		var destination = document.getElementById("destination").value;
		var vehicle_no = document.getElementById("vehicle_no").value;
		date=date.split("-").reverse().join("-");
		

		document.getElementById("inv_date").innerHTML=""+date+"";

		document.getElementById("inv_no").innerHTML=""+no+"";
		document.getElementById("inv_permit").innerHTML=""+permit+"";
		document.getElementById("inv_destination").innerHTML=""+destination+"";
		document.getElementById("inv_vehicle").innerHTML=""+vehicle_no+"";
		


		
		

		document.getElementById("inv_consig_name").innerHTML=""+consigneename+"";
		document.getElementById("inv_consig_add").innerHTML=""+consig_add+"";
		document.getElementById("inv_consig_gst").innerHTML=""+consig_gst+"";
		document.getElementById("inv_consig_state").innerHTML=""+consignee_state+"";

		document.getElementById("inv_buyer_name").innerHTML=""+buyername+"";
		document.getElementById("inv_buyer_add").innerHTML=""+buyer_add+"";
		document.getElementById("inv_buyer_gst").innerHTML=""+buyer_gst+"";
		document.getElementById("inv_buyer_state").innerHTML=""+buyer_state+"";

		
		

		var sumcost=quantity*rate;
		var tax=sumcost*0.05;

		var igstyes=document.getElementById("igstyes");
		var igstno=document.getElementById("igstno");
		var ctax;
		var stax;
		var igst;
		if(igstyes.checked){
			
			igst=tax;

		}
		if(igstno.checked){
			ctax=tax*0.5;
			stax=tax*0.5;
			
		}

		
		var total=tax+sumcost;

		var Quantity=helptrim(quantity,3);

		
		var Rate=helptrim(rate,2);
		var Tax=helptrim(tax,2);

		var Ctax=helptrim(ctax,2);
		var Stax=helptrim(stax,2);
		var Total=helptrim(total,2);
		var Sumcost=helptrim(sumcost,2);
		var Igst=helptrim(igst,2)

		


		document.getElementById("inv_quantity").innerHTML=Quantity;
		document.getElementById("inv_rate").innerHTML=Rate;

		document.getElementById("inv_sumcost").innerHTML=Sumcost;
		document.getElementById("inv_tax").innerHTML=Tax;
		document.getElementById("inv_total").innerHTML=Total;
		document.getElementById("inv_tx_sumtotal").innerHTML=Sumcost;
		document.getElementById("inv_tx_ctax").innerHTML=Ctax;
		document.getElementById("inv_tx_stax").innerHTML=Stax;
		document.getElementById("inv_tx_itax").innerHTML=Igst;
		document.getElementById("inv_tx_tax").innerHTML=Tax;
		document.getElementById("inv_tx_final").innerHTML=Total;

		
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
			document.getElementById("buyername").value="";
			document.getElementById("buyer_add").value="";
			document.getElementById("buyer_gst").value="";
			document.getElementById("buyer_state").value="";
			
			}
	return;

}

function mySubmit(){
	
	document.getElementById("customdiv3").style.display="block";
	return;

}

function myPrint(){
	document.getElementById("forminside").style.display="none";
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
		window.print();
		//window.location.replace("index.html");


	}
	else{
		document.getElementById("prompt").style.display="block"
		document.getElementById("prompt").innerHTML="Wrong Password, try again";
		document.getElementById("pwd").value="";

	}
}
