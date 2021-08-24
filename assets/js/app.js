let lang = document.querySelectorAll('.header__choose')
let currentLocation = location.href;
let menu = document.querySelectorAll('.menu__link');
let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

lang.forEach(c => {

	c.addEventListener('click', function () {
		lang.forEach(nav => nav.classList.remove('active'));
		this.classList.add('active')
	})

})

// Для многостраничной страницы

for (let i = 0; i < menuLength; i++) {
	if (menu[i].href === currentLocation) {
		menu[i].classList.add("active");
	}
}
let burger = document.querySelector('.menu__icon')
let iconMenu = document.querySelector('.menu')

if (burger) {
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('lock')
		burger.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}
// let box = document.querySelectorAll(".column-portfolio__item")
// let navFilter = document.querySelector(".menu-portfolio")

// navFilter.addEventListener('click', (e) => {
// 	if (e.target.tagName !== 'LI') {
// 		return false
// 	};

// 	let filterclass = e.target.dataset["filter"];

// 	box.forEach(elem => {
// 		elem.classList.remove('hide')
// 		if (!elem.classList.contains(filterclass) && filterclass !== 'ALL') {
// 			elem.classList.add("hide")

// 		}
// 	})
// });
let modalBtn = document.querySelectorAll('[data-modal]');
let madalCLose = document.querySelectorAll('.popup__close');
let madalArea = document.querySelectorAll('.popup');


modalBtn.forEach(i => {
	i.addEventListener('click', e => {
		let current = e.currentTarget;
		let modalId = current.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
		let modalContent = document.querySelector('.popup__content')

		modalContent.addEventListener('click', e => {
			e.stopPropagation()
		})

		modal.classList.add('open');
		document.body.classList.add('lock');
	})
})

madalCLose.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget.closest('.popup');

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})


madalArea.forEach(i => {
	i.addEventListener('click', e => {
		let currentModal = e.currentTarget;

		currentModal.classList.remove('open');
		document.body.classList.remove('lock');
	})
})
let autoresize = document.querySelectorAll('[data-autoresize]');

autoresize.forEach(i => {
	let autoresizeH = i.offsetHeight;

	i.addEventListener('input', e => {
		let current = e.target;

		current.style.height = autoresizeH + 'px';
		current.style.height = current.scrollHeight + 'px';
	})
})
// function ibg(){

// 	let ibg=document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if(ibg[i].querySelector('img')){
// 			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// 		}
// 	}
// }

// ibg();
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper(".swiper-container", {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {		
		el: '.swiper-pagination',

		// type: 'fraction',
		// renderFraction: function (currentclass, totalclass){
		// 	return 'Photo <span class="' + currentclass + '"></span>' + ' from ' + ' <span class="' + totalclass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		type: 'bullets',
		clickable: true,
		dynamicBullets: false, 


		// scss: swiper-pagination-bullets
	},



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	simulateTouch: true,
	// градус при котором поворот
	touchAngle: 90,
	grabcursor: true,


	slideToclickedSlide: true,


	// hashNavigation: {
	// 	watchState: true,
	// },

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	// mousewheel: {
		// sensiitivity: 1,
	// },


	// autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	watchOverflow: true,

	spaceBetween: 30,

	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,

	// с какой начнет
	initialSlide: 0,

	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPercolumn: 2,

	// бесконечность
	// loop: true,
	// loopedSlides: 0,


	// freeMode: true,


	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// },

	speed: 800,

	// direction: 'vertical',

	effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: true,
			// autoHeight: true,
			slidesPerGroup: 1,
		},
		772: {
			slidesPerView: 2,
			centeredSlides: false,
			// autoHeight: true,
			slidesPerGroup: 2,
		},
	},

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
});


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',

		// type: 'fraction',
		// renderFraction: function (currentclass, totalclass){
		// 	return 'Photo <span class="' + currentclass + '"></span>' + ' from ' + ' <span class="' + totalclass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
// });