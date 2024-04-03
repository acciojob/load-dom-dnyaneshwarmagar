//your JS code here. If required.

document.addEventListener("DOMContentLoaded",()=>{
	let text = document.createElement("p") ;
	text.textContent =  "DOM load success";
	document.querySelector("body").append(text);
})
