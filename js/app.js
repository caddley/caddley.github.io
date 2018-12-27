
function openModal(image, caption){
	document.getElementById("modalimg").src = image;
	document.getElementById("modalimg").alt = caption;
	document.getElementById("modalcap").innerHTML=caption;
	document.getElementById("modaldiv").style.display='block';
}


function accordion(id) {
	var x = document.getElementById(id);
	var chev = x.querySelector(".fa");
	var info = x.querySelector(".w3-container"); 
	if (info.className.indexOf("w3-show") == -1) {
		info.className += " w3-show";
		chev.className = "fa fa-chevron-down";
	} 
	else { 
		info.className = info.className.replace(" w3-show", "");
		chev.className = "fa fa-chevron-right";
		
	}
}

// Change style of navbar on scroll
window.onscroll = function() {navStyle()};
function navStyle() {
		var navbar = document.getElementById("myNavbar");
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
		} else {
				navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
		}
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
		var x = document.getElementById("navBar");
		if (x.className.indexOf("w3-show") == -1) {
				x.className += " w3-show";
		} else {
				x.className = x.className.replace(" w3-show", "");
		}
}


// run at start up

var addr = 'christine.a.addley' + '@' + 'btinternet' + '.' + 'com';
var contactform =  document.getElementById('formaction');
var mailfield = document.getElementById('addr'); 
contactform.setAttribute('action', '//formspree.io/' + addr);
mailfield.innerHTML = addr;


