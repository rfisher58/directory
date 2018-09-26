const render = function(){
	$("#data").empty();
	let content = "";
	for(i=0; i < employeeList.length; i++){
		content += `<div class="card"><p>${employeeList[i].name}</p>
		<p>${employeeList[i].officeNum}</p>
		<p>${employeeList[i].phoneNum}</p></div>`
	
	}
	$("#data").append(content);
}

const add = function(){
	$("#data").empty();
	let employee = {name:"", phone:"", office:""}
	employee.name = prompt("Who would you like to add?");
	employee.phoneNum = prompt("What is the phone number?");
	employee.officeNum = prompt("What is the office Number?");
	employeeList.unshift(employee);
	console.log(employee);
}

//const verify = function(){
	//const i = employeeList.findIndex(e=>e.name===i);

const remove = function(){
	$("#data").empty();
	for(i = 0; i < employeeList.length; i++){
		let button = "";
		button = `<button class="who" value=${employeeList[i].name}> ${employeeList[i].name}</button>`
		$("#data").append(button);
	}
}



$("#data").on("click",".who",function(event){
	event.preventDefault();
	let contact = ($(this).val());
	for(i=0; i < employeeList.length; i++){		
		if(contact === employeeList[i].name){
			employeeList.splice(i,1);
	} }
	render();
})


const verify = function(event){
	employee = prompt("Who would you like to verify?");
	for(i=0; i < employeeList.length; i++){
		if(employee === employeeList[i].name){
			console.log("match");
			alert(`Yes, ${employee} is in the directory.`);
		}
	}
}

const update = function(event){
	employee = prompt("Who would you like to update?");
	for(i = 0; i < employeeList.length; i++){
		if(employee === employeeList[i].name){
			console.log("match");
			employeeList[i].officeNum = prompt("What is the new office number?");
			employeeList[i].phoneNum = prompt("What is the new phone number?");
		}
	}
}











$("#view").on("click", function(){
	console.log("The function is running");
	render();
})

$("#add").on("click", function(){
	console.log("The function is running");
	add();
	render();
})

$("#verify").on("click", function(){
	console.log("The function is running");
	verify();
})

$("#update").on("click", function(){
	console.log("The function is running");
	update();
})
  
$("#delete").on("click", function(){
	console.log("The function is running");
	remove();
})


// for(i=0; i<employeeList.length; i++){
// 	button = employeeList[i].name;
//   }