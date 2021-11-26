//work experience
function addNewWeField()
{
	let newNode=document.createElement("textarea")
	newNode.classList.add("focus")
	newNode.classList.add("weField")
	newNode.setAttribute("rows",3)
	
	
	let weAddButtonObj=document.getElementById("weAddButton")

	weAddButtonObj.insertAdjacentElement("beforebegin", newNode);


}
//academic
function addNewAqField()
{
	let newNode=document.createElement("textarea")
	newNode.classList.add("focus")
	newNode.classList.add("aqField")
	newNode.setAttribute("rows",2)


	let aqAddButtonobj=document.getElementById("aqAddButton")

	aqAddButtonobj.insertAdjacentElement("beforebegin", newNode);

}
//skills
function addNewSkillsField()
{
	let newNode=document.createElement("textarea")
	newNode.classList.add("focus")
	newNode.classList.add("skillsField")
	newNode.setAttribute("rows",1)


	let skillsAddButtonobj=document.getElementById("skillsAddButton")

	skillsAddButtonobj.insertAdjacentElement("beforebegin", newNode);

}

//projects
function addNewProjectsField()
{
	let newNode=document.createElement("textarea")
	newNode.classList.add("focus")
	newNode.classList.add("projectsField")
	newNode.setAttribute("rows",3)


	let projectsAddButtonobj=document.getElementById("projectsAddButton")

	projectsAddButtonobj.insertAdjacentElement("beforebegin", newNode);

}

//certificates
function addNewCertificatesField()
{
	let newNode=document.createElement("textarea")
	newNode.classList.add("focus")
	newNode.classList.add("certificatesField")
	newNode.setAttribute("rows",2)


	let certificatesAddButtonobj=document.getElementById("certificatesAddButton")

	certificatesAddButtonobj.insertAdjacentElement("beforebegin", newNode);

}





//generating cv
function generateCV()
{
	//name
	let nameField=document.getElementById("nameField").value
	let nameT1=document.getElementById("nameT1").innerHTML=nameField
	

	//contact
	document.getElementById("contactT").innerHTML=document.getElementById("contactField").value
	//address
	document.getElementById("addressT").innerHTML=document.getElementById("addressField").value
	//email
	document.getElementById("emailT").innerHTML=document.getElementById("emailField").value
	//hobbies
	document.getElementById("hobbiesT").innerHTML=document.getElementById("hobbiesField").value
	//Interests
	document.getElementById("interestsT").innerHTML=document.getElementById("interestsField").value
	//languages
	document.getElementById("languagesT").innerHTML=document.getElementById("languagesField").value
	//Linkedin
	document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value
	
	//objective
	document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value
	
	//work experience
	let wes=document.getElementsByClassName("weField")
	let str=""
	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`
	}
	document.getElementById("weT").innerHTML=str

	//academic qualification
	let aqs=document.getElementsByClassName("aqField")
	let str1=""
	for(let e of aqs)
	{
		str1=str1+`<li> ${e.value} </li>`
	}
	document.getElementById("aqT").innerHTML=str1


	//skills
	let skills=document.getElementsByClassName("skillsField")
	let str2=""
	for(let e of skills)
	{
		str2=str2+`<li> ${e.value} </li>`
	}
	document.getElementById("skillsT").innerHTML=str2

	//projects
	let projects=document.getElementsByClassName("projectsField")
	let str3=""
	for(let e of projects)
	{
		str3=str3+`<li> ${e.value} </li>`
	}
	document.getElementById("projectsT").innerHTML=str3

	//certificates
	let certificates=document.getElementsByClassName("certificatesField")
	let str4=""
	for(let e of certificates)
	{
		str4=str4+`<li> ${e.value} </li>`
	}
	document.getElementById("certificatesT").innerHTML=str4


	//code for setting image
	let file=document.getElementById("imgField").files[0]
	console.log(file)
	let reader=new FileReader()
	reader.readAsDataURL(file)
	console.log(reader.result)

	//set image to template
	reader.onloadend=function()
	{
	document.getElementById("imgT").src=reader.result
	}



	document.getElementById("cv-form").style.display="none"
	document.getElementById("cv-template").style.display="block"

}
//blue
function blue()
{
	let blue=document.querySelectorAll("h3,hr")
	

	for(var i=0;i<blue.length;i++)
	{
		blue[i].style.color="blue"
		blue[i].style.fontWeight="bolder"

	}
}

//green
function green()
{
	let green=document.querySelectorAll("h3,hr")
	

	for(var i=0;i<green.length;i++)
	{
		green[i].style.color="green"
		green[i].style.fontWeight="bolder"
	
	}
}

//red
function red()
{
let red=document.querySelectorAll("h3,hr")
	

	for(var i=0;i<red.length;i++)
	{
		red[i].style.color="red"
		red[i].style.fontWeight="bolder"
	
	}
}

//violet
function violet()
{
	let violet=document.querySelectorAll("h3,hr")
	

	for(var i=0;i<violet.length;i++)
	{
		violet[i].style.color="violet"
		violet[i].style.fontWeight="bolder"
	
	}
}




//print cv
function printResume()
{
	document.getElementById("theme").style.display="none"
	window.print();


}