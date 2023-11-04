function toggleSocials() {
	const navbar = document.getElementById("nav-social");
	if(navbar.classList.contains("slide-in")){
		return navbar.classList.remove("slide-in");
	}
	navbar.classList.add("slide-in");
}

function hideSocials() {
	const navbar = document.getElementById("nav-social");
	navbar.classList.remove("slide-in");
}

function openCloseNav() {
	const element = document.getElementById("nav-project-dropdown");
	element.style.display = (element.style.display === "block") ? "none" : "block";
}

const TABLET_WIDTH = 768;
if(window.innerWidth <= TABLET_WIDTH){
	console.info("Setting to mobile navigation...");

	const element = document.getElementById("nav-projects");
	element.classList.add("supress-hover");
	element.onclick = () => {
		hideSocials(); openCloseNav();
	};
}



const anchorCache = new Map();

/** @param {HTMLElement} element */
function updateURL(element) {
	if(!element) return;
	if(!element.href) return;

	const hashLink = window.location.href.split('#')[0] + element.getAttribute('href');

	history.replaceState(null, null, hashLink);
	navigator.clipboard.writeText(hashLink);
}


function onLoad() {
	// Make all links with class "open-in-new" open in a new tab
	document.querySelectorAll('a.open-in-new').forEach(link => {
		link.target = "_blank";
	});


	// Place all tables, and codeblocks into a div with class "overflow-container"
	document.querySelectorAll('table:not(.overflow-container table)').forEach(tableElement => {
		const parentElement = tableElement.parentElement;

		const overflowContainerElement = document.createElement('div');
		overflowContainerElement.className = "overflow-container";

		parentElement.insertBefore(overflowContainerElement, tableElement);
		overflowContainerElement.appendChild(tableElement);
	});

	document.querySelectorAll('pre code').forEach(codeBlock => {
		const preElement = codeBlock.parentElement;
		const parentElement = preElement?.parentElement;

		if(parentElement?.className.includes("overflow-container")) return;

		const overflowContainerElement = document.createElement('div');
		overflowContainerElement.className = "overflow-container";

		parentElement.insertBefore(overflowContainerElement, preElement);
		overflowContainerElement.appendChild(preElement);
	});
}


window.onload = onLoad();


/* eslint-disable no-undef */
hljs.highlightAll();
/* eslint-enable no-undef */