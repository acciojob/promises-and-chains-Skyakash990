document.addEventListener("DOMContentLoaded",function(){
let ageval=document.getElementById("age");
let nameval=document.getElementById("name");
let form=document.getElementById("voteForm");

	form.addEventListener("submit",function(e){
		e.preventDefault();
		let age=Number(ageval.value);
		let name=nameval.value.trim();
		if(age<=0 || name==="" || isNaN(age)){
			alert("Please enter valid details.");
			return;
		}
		new Promise((resolve,reject)=>{
			if(age>=18){
				setTimeout(()=>{
					resolve("Welcome, . You can vote.");
				},4000);
			}
			else{
				reject("Oh sorry . You aren't old enough.");
			}
		})
		.then((res)=>{
			alert(res);
		})
		.catch((err)=>{
			alert(err);
		});
});
})