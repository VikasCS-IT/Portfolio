const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// blocked keydown

document.addEventListener('keydown', function (e) {
	const blockedKeys = [
		'F12',
		'Control+Shift+I',
		'Control+Shift+J',
		'Control+U',
		'Control+C',
		'Control+X',
		'Control+Y',
		'Control+Z',
		'Control+V',
		'Control+Shift+C',
		'Control+S',
		'Control+H',
		'Control+A',
		'Control+E',
		'Meta+V',
		'Alt+Meta',
		'Control+Alt+J',
		'Control+Alt+I',
		'Shift+Meta+C'
	];

	const combo =
		(e.ctrlKey ? 'Control+' : '') +
		(e.shiftKey ? 'Shift+' : '') +
		(e.altKey ? 'Alt+' : '') +
		(e.metaKey ? 'Meta+' : '') +
		e.key.toUpperCase();

	if (blockedKeys.includes(combo) || e.key === 'F12') {
		e.preventDefault();
		return false;
	}
});

// Block right-click
document.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	alert(
		`'Basic Study And All Knowledge Tricks' blocked right-click.\n\n'Basic Study And All Knowledge Tricks' माउस के राइट क्लिक को ब्लॉक कर दिया हैं।`
	);
});