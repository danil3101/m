var list = document.querySelector(".open_lang");
var listStyle = getStyle(list);
var btn = document.querySelector(".lang-btn");
var span = document.querySelectorAll(".language");
var is_open = false;

btn.onclick = function showMenu() {
	if (listStyle.display == 'none') {
		is_open = false;
	} else {
		is_open = true;
	}

	if (is_open) {
		btn.style.background = '#EBEFF3';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#B1B1B4';
		}
		btn.style.width = '180px';
		list.style.display = 'none';
	} else {
		list.style.display = 'flex';
		btn.style.width = '210px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#fff';
		}
		btn.style.background = 'rgba(31, 80, 134, 0.3)';
	}
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
}