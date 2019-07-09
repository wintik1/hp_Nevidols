/* Sass Document */

	
var botton = document.querySelector('.botton1');
var botton2 = document.querySelector('#botton2');/*крестик меню*/
var block = document.querySelector('.header_top_site_menu');
botton2.classList.add('header_top_site_botton_image');
console.log(block);
var number = 0;

var openMenu = function(evt) {
	if(number === 0){
		evt.preventDefault();
	block.classList.add('header_top_site_menu_open');
	botton2.classList.add('header_top_site_botton_image1');
	botton2.classList.remove('header_top_site_botton_image');
	number = 1;
	}
	else {
		evt.preventDefault();
		block.classList.remove('header_top_site_menu_open');
		botton2.classList.remove('header_top_site_botton_image1');
		botton2.classList.add('header_top_site_botton_image');
		number =0;
	}
};


botton.addEventListener("click" ,openMenu);
	

