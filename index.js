var regArray = [];

 function initData() //check whether any previous data is avilable in local storage
{
	if (localStorage.regRecord) //if yes recreate table/array
		{
			regArray = JSON.parse(localStorage.regRecord);

			for(var i=0; i<regArray.length; i++)
				{
					prepareTableCell(regArray[i].Fname, regArray[i].Lname, regArray[i].Phone, regArray[i].Email, regArray[i].Prn, regArray[i].Batch, regArray[i].Gender, regArray[i].Message);

				}
		}

}
function addHtmlTableRow()
    {
		var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var prn = document.getElementById("prn").value;
        var batchh = document.getElementById("batchh").value;
        var option;
        if(document.getElementById("option1").checked){
          option=document.getElementById("option1").value;
        }else if(document.getElementById("option2").checked){
          option=document.getElementById("option2").value;
        }else {
          option=document.getElementById("option3").value;
        }
        var message = document.getElementById("message").value;

		var regObj = {Fname:fname,Lname:lname,Phone:phone,Email:email,Prn:prn,Batch:batchh,Gender:option,Message:message};

		regArray.push(regObj);

       	localStorage.regRecord = JSON.stringify(regArray);
		//any obj type could be converted into JSON file
		prepareTableCell(fname,lname,phone,email,prn,batchh,option,message);

		//clr fields
		    document.getElementById("fname").value ="";
        document.getElementById("lname").value ="";
        document.getElementById("phone").value ="";
        document.getElementById("email").value ="";
        document.getElementById("prn").value ="";
       	document.getElementById("batchh").value ="";
       	document.getElementById("option").value ="";
        document.getElementById("message").value ="";

    }

function prepareTableCell(fname,lname,phone,email,prn,batchh,option,message)
{
		var table = document.getElementById("table");
        var	newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
      	var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = phone;
        cell4.innerHTML = email;
        cell5.innerHTML = prn;
        cell6.innerHTML = batchh;
        cell7.innerHTML = option;
        cell8.innerHTML = message;
}


function resetForm() {
  document.getElementById("myform").reset();
}
