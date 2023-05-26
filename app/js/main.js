var swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
		  slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1,
		}
	  }
});

document.querySelector('#toggle').addEventListener('click', function() {
	this.classList.toggle("is-active");
	document.getElementById('menu').classList.toggle("open");
  })