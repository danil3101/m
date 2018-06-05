var list = document.querySelector(".open_lang");
var listStyle = getStyle(list);
var m_menu_bnt = document.querySelector(".m-nav__btn");
var m_menu = document.querySelector(".m-menu");
var m_menuStyle = getStyle(m_menu);
var btn = document.querySelector(".lang-btn");
var span = document.querySelectorAll(".language");
var text = document.querySelector(".text-block");
var is_open = false;

btn.onclick = function () {
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
		text.style.paddingTop = '69px';
	} else {
		list.style.display = 'flex';
		text.style.paddingTop = '0px';
		btn.style.width = '210px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#fff';
		}
		btn.style.background = 'rgba(31, 80, 134, 0.3)';
	}
}

m_menu_bnt.onclick = function () {
	if (m_menuStyle.top == '-1000px') {
		is_open = true;
	} else {
		is_open = false;
	}

	if (is_open) {
		m_menu.style.top = '0px';
	} else {
		m_menu.style.top = '-1000px';
	}
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
}