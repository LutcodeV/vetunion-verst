
// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]')
if(inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: '+7 999 999 99 99',
			placeholder: '+7 XXX XXX XX XX',
		}).mask(input);
	})
}

// HEADER
const header = document.querySelector('.header')
const headerBurger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header-menu')
const headerMenuClose = document.querySelector('.header-menu__close')
if(header) {
	window.addEventListener('scroll', () => {
		if(window.scrollY > 0) {
			header.classList.add('active')
		} else {
			header.classList.remove('active')
		}
	})
}
if(headerBurger && headerMenu) {
	headerBurger.addEventListener('click', () => {
		headerMenu.classList.toggle('active')
	})

	headerMenuClose.addEventListener('click', () => {
		headerMenu.classList.remove('active')
	})

	headerMenu.addEventListener('click', (e) => {
		if(window.innerWidth <= 425) {
			if(e.composedPath()[0] === headerMenu) {
				headerMenu.classList.remove('active')
			}
		}
	})
}
// HERO-SWIPER
const heroSwiper = new Swiper('.hero-swiper', {
	slidesPerView: 'auto',
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: '#hero-swiper-arrow-next',
		prevEl: '#hero-swiper-arrow-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 2
		}
	}
})
// BENEFITS
gsap.registerPlugin(ScrollTrigger);

const benefitsBlock = document.querySelectorAll('.benefits-block')

if(benefitsBlock && window.innerWidth > 1024) {
	const benefitsGSAP = gsap.timeline({
		scrollTrigger: {
			trigger: ".benefits",
			start: "top top",
			end: "bottom+=200% bottom",
			scrub: true,
			pin: true,
		},
	})

	benefitsBlock.forEach((item, index) => {
		benefitsGSAP.fromTo(item, {y: `${index * 200}%`},
			{y: `${index * 30}px`,
				onEnter: () => { benefitsBlock[index - 1]?.classList.add('prev')}
			}
		)
	})
}
// BENEFITS-SWIPER
const benefitsSwiper = new Swiper('.benefits-swiper', {
	slidesPerView: 1,
	spaceBetween: 24,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
})
// DOCTORS-SWIPER
const doctorsSwiper = new Swiper('.doctors__row', {
	slidesPerView: 'auto',
	spaceBetween: 24,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '#doctors-swiper-arrow-next',
		prevEl: '#doctors-swiper-arrow-prev',
	},
	breakpoints: {
		1440: {
			slidesPerView: 3
		}
	}
})
// ADDRESSES
const addresses = document.querySelectorAll('.addresses__list .address')
const addressesSwipers = document.querySelectorAll('.addresses__swipers .addresses-swiper')
if(addresses.length > 0) {
	addresses.forEach((item, index) => {
		const opener = item.querySelector('.address__open')
		opener.addEventListener('click', () => {
			addresses.forEach((item, index) => {
				item.classList.remove('active')
				addressesSwipers[index].classList.remove('active')
			})
			item.classList.add('active')
			addressesSwipers[index].classList.add('active')
		})
	});
	addressesSwipers.forEach((item, index) => {
		const swiper = new Swiper(item, {
			slidesPerView: 1,
			spaceBetween: 24,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		})
	})
}
// FAQ
const faqs = document.querySelectorAll('.faq-item')
if(faqs) {
	faqs.forEach((item, index) => {
		const opener = item.querySelector('.faq-item__button')
		opener.addEventListener('click', () => {
			item.classList.toggle('active')
		})
	});
}
// REVIEWS-SWIPER
const reviewsSwiper = new Swiper('.reviews-swiper', {
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	navigation: {
		nextEl: '#reviews-swiper-arrow-next',
		prevEl: '#reviews-swiper-arrow-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 2
		}
	}
})
// ABOUT-HERO
const aboutHeroMenuLink = document.querySelectorAll('.about-hero__menu .about-hero__menu-link')
if(aboutHeroMenuLink) {
	const aboutHeroSwiper = new Swiper('.about-hero__swiper', {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			769: {
				pagination: false
			}
		},
		on: {
			slideChange: (e) => {
				aboutHeroMenuLink.forEach((item, index) => {
					item.classList.remove('active')
					if(index === e.realIndex) {
						item.classList.add('active')
					}
				})
			}
		}
	})

	aboutHeroMenuLink.forEach((item, index) => {
		item.addEventListener('click', () => {
			aboutHeroSwiper.slideTo(index)
		})
	})
}
// ABOUT-BENEFITS
const aboutBenefitsSwiper = new Swiper('.about-benefits-swiper', {
	slidesPerView: 1,
	spaceBetween: 24,
	enabled: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		769: {
			enabled: false
		}
	}
})

// MODALS
const modalContainer = document.querySelector('.modal-container')
const modalContainerWrapper = document.querySelector('.modal-container__wrapper')
// const modalOpeners = document.querySelectorAll('[data-modal-open]')
const modals = document.querySelectorAll('.modal')

const openModal = (modal) => {
	modalContainer.classList.add('active')
	modal.classList.add('active')
}
const closeAllModals = () => {
	document.querySelectorAll('.modal').forEach((item) => {
		item.classList.remove('active')
	});
	modalContainer.classList.remove('active')
}

if(modalContainer) {
	modals.forEach((modal) => {
		const openers = document.querySelectorAll(`[data-modal-open="${modal.id}"]`)
		const closes = modal.querySelectorAll('.modal__close, [data-modal-close]')

		closes.forEach((close) => {
			close.addEventListener('click', () => {
				closeAllModals()
			})
		})
		openers.forEach((opener) => opener.addEventListener('click', () => {
			closeAllModals()
			openModal(modal)
		}))
	})
}

// MORE-REVIEW
const moreReview = document.querySelectorAll('[data-review-text]')
if(moreReview) {
	moreReview.forEach((item, index) => {
		const text = item.dataset.reviewText
		const author = item.dataset.reviewAuthor

		item.addEventListener('click', () => {
			const modalReview = document.createElement('div')
			modalReview.classList = 'modal-review active modal'
			modalReview.innerHTML = `
				<button class="modal__close">
					<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.5858 12.4998C1.4699 12.4999 1.35659 12.4655 1.26022 12.4011C1.16384 12.3367 1.08872 12.2452 1.04436 12.1381C1.00001 12.0311 0.988403 11.9132 1.01102 11.7996C1.03364 11.6859 1.08946 11.5815 1.17143 11.4995L11.9996 0.671396C12.1095 0.561497 12.2585 0.499756 12.4139 0.499756C12.5693 0.499756 12.7184 0.561497 12.8283 0.671396C12.9382 0.781295 12.9999 0.93035 12.9999 1.08577C12.9999 1.24119 12.9382 1.39025 12.8283 1.50015L2.00018 12.3283C1.94581 12.3828 1.88122 12.426 1.81011 12.4554C1.739 12.4848 1.66277 12.4999 1.5858 12.4998Z" fill="#253746" stroke="#253746" stroke-width="0.5"/>
						<path d="M12.4139 12.4998C12.3369 12.4999 12.2607 12.4848 12.1896 12.4554C12.1185 12.426 12.0539 12.3828 11.9995 12.3283L1.1714 1.50015C1.0615 1.39025 0.999756 1.24119 0.999756 1.08577C0.999756 0.93035 1.0615 0.781295 1.1714 0.671396C1.28129 0.561497 1.43035 0.499756 1.58577 0.499756C1.74119 0.499756 1.89025 0.561497 2.00015 0.671396L12.8283 11.4995C12.9102 11.5815 12.9661 11.6859 12.9887 11.7996C13.0113 11.9132 12.9997 12.0311 12.9553 12.1381C12.911 12.2452 12.8359 12.3367 12.7395 12.4011C12.6431 12.4655 12.5298 12.4999 12.4139 12.4998Z" fill="#253746" stroke="#253746" stroke-width="0.5"/>
					</svg>
				</button>
				<p class="modal-review__title">${author}</p>
				<p class="modal-review__text">${text}</p>
			`
			closeAllModals()
			modalContainerWrapper.appendChild(modalReview)
			openModal(modalReview)
			const closeButton = modalContainerWrapper.querySelector('.modal-review .modal__close')
			closeButton.addEventListener('click', () => {
				modalReview.remove()
				closeAllModals()
			})
		})
	})
}

// VIDEO-REVIEW
const videoReview = document.querySelectorAll('[data-review-video],[data-review-video-vk]')
if(videoReview) {
	videoReview.forEach((item, index) => {
		const videoSrc = item.dataset.reviewVideo
		const videoVKSrc = item.dataset.reviewVideoVk
		const isVerticalVideo = item.dataset.reviewVideoVertical

		item.addEventListener('click', () => {
			const modalReview = document.createElement('div')
			modalReview.classList = isVerticalVideo ? 'modal-review-video modal-review-video--vertical active modal' : 'modal-review-video active modal'
			modalReview.innerHTML = `
				<button class="modal__close">
					<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.5858 12.4998C1.4699 12.4999 1.35659 12.4655 1.26022 12.4011C1.16384 12.3367 1.08872 12.2452 1.04436 12.1381C1.00001 12.0311 0.988403 11.9132 1.01102 11.7996C1.03364 11.6859 1.08946 11.5815 1.17143 11.4995L11.9996 0.671396C12.1095 0.561497 12.2585 0.499756 12.4139 0.499756C12.5693 0.499756 12.7184 0.561497 12.8283 0.671396C12.9382 0.781295 12.9999 0.93035 12.9999 1.08577C12.9999 1.24119 12.9382 1.39025 12.8283 1.50015L2.00018 12.3283C1.94581 12.3828 1.88122 12.426 1.81011 12.4554C1.739 12.4848 1.66277 12.4999 1.5858 12.4998Z" fill="#253746" stroke="#253746" stroke-width="0.5"/>
						<path d="M12.4139 12.4998C12.3369 12.4999 12.2607 12.4848 12.1896 12.4554C12.1185 12.426 12.0539 12.3828 11.9995 12.3283L1.1714 1.50015C1.0615 1.39025 0.999756 1.24119 0.999756 1.08577C0.999756 0.93035 1.0615 0.781295 1.1714 0.671396C1.28129 0.561497 1.43035 0.499756 1.58577 0.499756C1.74119 0.499756 1.89025 0.561497 2.00015 0.671396L12.8283 11.4995C12.9102 11.5815 12.9661 11.6859 12.9887 11.7996C13.0113 11.9132 12.9997 12.0311 12.9553 12.1381C12.911 12.2452 12.8359 12.3367 12.7395 12.4011C12.6431 12.4655 12.5298 12.4999 12.4139 12.4998Z" fill="#253746" stroke="#253746" stroke-width="0.5"/>
					</svg>
				</button>
				${videoVKSrc ? `<iframe src="${videoVKSrc}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"  class="modal-review-video__video" frameborder="0" allowfullscreen></iframe>` : `<video controls class="modal-review-video__video" src="${videoSrc}"/>`}
			`
			closeAllModals()
			modalContainerWrapper.appendChild(modalReview)
			openModal(modalReview)
			const closeButton = modalContainerWrapper.querySelector('.modal-review-video .modal__close')
			closeButton.addEventListener('click', () => {
				modalReview.remove()
				closeAllModals()
			})
		})
	})
}


// FILE
const fileLabels = document.querySelectorAll('.file')
if(fileLabels.length > 0) {
	fileLabels.forEach((item) => {
		const input = item.querySelector('input')
		const title = item.querySelector('.file__title')
		input.addEventListener('change', () => {
			const fileName = input.value.split('\\').pop()
			title.textContent = fileName
		})
	})
}

// WIDGET-CONSULTATION
const widgetConsultation = document.querySelector('.widget-consultation')
const initWidgetConsultation = () => {
	this.open = widgetConsultation.querySelector('.widget-consultation__open')
	this.muted = widgetConsultation.querySelector('.widget-consultation__muted')
	this.video = widgetConsultation.querySelector('.widget-consultation__video')
	this.videoButtonPlay = widgetConsultation.querySelector('.widget-consultation__video-button-play')

	this.open.addEventListener('click', () => {
		widgetConsultation.classList.toggle('active')
		if(widgetConsultation.classList.contains('play')) {
			this.video.pause()
		}
	})
	this.muted.addEventListener('click', () => {
		this.video.muted = !this.video.muted
		widgetConsultation.classList.toggle('muted')
	})
	this.videoButtonPlay.addEventListener('click', () => {
		if(widgetConsultation.classList.contains('play')) {
			this.video.pause()
		} else {
			this.video.play()
		}
		widgetConsultation.classList.toggle('play')
	})
	this.video.addEventListener('ended', () => {
		widgetConsultation.classList.remove('play')
	})
	this.video.addEventListener('click', () => {
		if(widgetConsultation.classList.contains('play')) {
			this.video.pause()
		} else {
			this.video.play()
		}
		widgetConsultation.classList.toggle('play')
	})
}
if(widgetConsultation) {
	initWidgetConsultation()
}


// SEARCH
const searchContainer = document.querySelector('.search-container')
const searchOpener = document.querySelector('#searchOpener')
const searchMobileOpener = document.querySelector('#searchMobileOpener')
const MOCK_DATA = [
	{title: 'Вакцинация Биокан DHPPi+L', link: '#'},
	{title: 'Вакцинация отечественная от бешенства Рабикс', link: '#'},
	{title: 'Вакцинация отечественная от бешенства Рабикс', link: '#'},
	{title: 'Терапевт: первичный приём', link: '#'},
	{title: 'Терапевт: повторный приём', link: '#'},
	{title: 'Консультация врача терапевта без приема животного онлайн/оффлайн', link: '#'},
	{title: 'Консультация врача терапевта без приема животного онлайн/оффлайн', link: '#'},
]
if(searchContainer) {
	const searchContainerResults = document.querySelector('.search-container__results')
	const searchContainerInput = document.querySelector('.search-container-input__field')
	const searchContainerNotFound = document.querySelector('.search-container__not-found')
	const searchContainerAllResults = document.querySelector('.search-container__result--all-results')
	const searchContainerRow = document.querySelector('.search-container__row')
	const searchContainerBack = document.querySelector('#searchBack')
	searchOpener.addEventListener('click', () => {
		searchContainer.classList.toggle('active')
		header.classList.toggle('search-active')
	})

	searchMobileOpener.addEventListener('click', () => {
		searchContainer.classList.toggle('active')
		header.classList.toggle('search-active')
		headerMenu.classList.remove('active')
	})

	searchContainerBack.addEventListener('click', () => {
		searchContainer.classList.remove('active')
		header.classList.remove('search-active')
		headerMenu.classList.add('active')
	})

	searchContainerInput.addEventListener('input', (e) => {
		const value = e.target.value
		searchContainerNotFound.style.display = 'none'
		searchContainerAllResults.style.display = 'none'
		const filteredData = MOCK_DATA.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
		searchContainerResults.innerHTML = ''
		if(filteredData.length === 0) {
			searchContainerNotFound.style.display = 'block'
			searchContainerResults.style.display = 'none'
			searchContainerNotFound.textContent = `Нет результатов по запросу "${value}"`
			return
		}
		searchContainerResults.style.display = 'flex'
		filteredData.forEach((item) => {
			const link = document.createElement('a')
			link.href = item.link
			link.textContent = item.title
			link.classList.add('search-container__result')
			searchContainerResults.appendChild(link)
		})
		if(searchContainerResults.clientWidth > searchContainerRow.clientWidth - 136) {
			searchContainerAllResults.style.display = 'flex'
		}
	})
}


// FORMS
const forms = document.querySelectorAll('form')
const formsMethods = {
	formRegistrationToReception: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formOrderHomeExit: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formOrderToReception: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formCouponForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formFaqForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
	formReviewForm: (formData) => {
		try {
			closeAllModals()
			openModal(document.querySelector('#successForm'))
		} catch (e) {
			closeAllModals()
			openModal(document.querySelector('#errorForm'))
		}
	},
}
if(forms.length > 0) {
	forms.forEach((item) =>
		item.addEventListener('submit', (e) => {
			e.preventDefault()
			const form = e.target
			const formID = form.getAttribute('id')
			const formData = new FormData(form)

			if(formsMethods[formID]) {
				formsMethods[formID](formData)
			}
		})
	)
}
