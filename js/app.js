;(function () {
	async function loadMenu() {
		displayMenu()
		loadNews()
		loadPhotos()
		loadMoments()
		loadMemorabilia()
	}

	async function loadNews() {
		const newsList = await fetch('./data/news.json').then((data) =>
			data.json()
		)

		displayNews(newsList)
	}

	async function loadPhotos() {
		const photoList = await fetch('./data/photos.json').then((data) =>
			data.json()
		)

		displayPhotos(photoList)
	}

	async function loadMoments() {
		const momentsList = await fetch('./data/moments.json').then((data) =>
			data.json()
		)

		displayMoments(momentsList)
	}

	async function loadMemorabilia() {
		const memo = await fetch ('./data/memorabilia.json').then((data) => data.json())

		displayMemo(memo)
	}

	function handleMenuList() {
		const menuText = this.textContent.toLowerCase()
		const section = document.querySelector('#' + menuText)
		const sectionTitle = document.querySelector(`#${menuText} .title`)
		const header = document.querySelector('header')
		const allMenuItems = document.querySelectorAll('.menu-container li')
		const allSectionTitle = document.querySelectorAll('.item-section .title')

		const { y } = section.getBoundingClientRect()

		//window.scrollTo({ top: y - 200, behavior: 'smooth'})
		section.scrollIntoView(true, { behavior: 'smooth' })

		header.classList.add('fixed-header')

		allMenuItems.forEach(function (menu) {
			menu.classList.remove('active')
		})

		allSectionTitle.forEach(function (title) {
			title.classList.remove('title-active')
		})

		this.classList.add('active')
		sectionTitle.classList.add('title-active')
	}

	function displayMenu() {
		const liNews = document.querySelector('#liNews')
		const liPhotos = document.querySelector('#liPhotos')
		const liMoments = document.querySelector('#liMoments')
		const liMemo = document.querySelector('#liMemo')
		liNews.addEventListener('click', handleMenuList)
		liPhotos.addEventListener('click', handleMenuList)
		liMoments.addEventListener('click', handleMenuList)
		liMemo.addEventListener('click', handleMenuList)

	}

	function displayNews(list) {
		const newsContainer = document.querySelector('.news')
		const fragmenItem = document.createDocumentFragment()

		list.forEach(function (item) {
			const anchorItem = document.createElement('a')
			const liItem = document.createElement('li')
			const header = document.createElement('h3')
			const content = document.createElement('p')
			header.classList.add('news-title')
			header.textContent = item.title
			anchorItem.setAttribute('href', item.link)
			anchorItem.setAttribute('target', '_blank')
			anchorItem.appendChild(header)
			content.innerHTML = item.excerpt

			liItem.appendChild(anchorItem)
			liItem.appendChild(content)

			fragmenItem.appendChild(liItem)
		})

		newsContainer.appendChild(fragmenItem)
	}

	function displayPhotos(list) {
		const photoContainer = document.querySelector('.photos-section')
		const fragmenItem = document.createDocumentFragment()

		list.forEach(function (item) {
			const liItem = document.createElement('li')
			const img = document.createElement('img')
			img.setAttribute('src', item.url)
			img.setAttribute('title', item.title)
			liItem.appendChild(img)
			fragmenItem.appendChild(liItem)
		})

		photoContainer.appendChild(fragmenItem)
	}

	function displayMoments(list) {
		const momentContainer = document.querySelector('.moments')
		const fragmenItem = document.createDocumentFragment()

		list.forEach(function (item) {
			const liItem = document.createElement('li')
			const img = document.createElement('img')
			img.setAttribute('src', item.url)
			img.setAttribute('title', item.title)
			liItem.appendChild(img)
			fragmenItem.appendChild(liItem)
		})

		momentContainer.appendChild(fragmenItem)
	}

	function displayMemo(list) {
		const memoContainer = document.querySelector('.memorabilia')
		const fragmenItem = document.createDocumentFragment()

		list.forEach(function (item) {
			const liItem = document.createElement('li')
			const img = document.createElement('img')
			img.setAttribute('src', item.url)
			img.setAttribute('title', item.title)
			liItem.appendChild(img)
			fragmenItem.appendChild(liItem)
		})

		memoContainer.appendChild(fragmenItem)
	}

	window.addEventListener('DOMContentLoaded', function () {
		const scroll2Top = document.querySelector('.scroll2Top')

		loadMenu()

		scroll2Top.addEventListener('click', function () {
			window.scrollTo(0, 0)

			return false
		})
	})

	// window.addEventListener('scroll', function () {
	// 	const header = document.querySelector('header')
	// 	const menuItems = document.querySelectorAll('.menu-container li')
	// 	const scroll2Top = document.querySelector('.scroll2Top')
	// 	const titleNews = document.querySelector('.title-news')
	// 	const titlePhotos = document.querySelector('.title-photos')
	// 	const titlePoll = document.querySelector('.title-poll')
	// 	const titleMoments = document.querySelector('.title-moments')
	// 	const titleVideos = document.querySelector('.title-videos')
	// 	const titlesMarkup = document.querySelectorAll('.title')

	// 	if (header.classList.contains('header-hidden')) {
	// 		header.classList.remove('header-hidden')
	// 	}

	// 	header.classList.add('fixed-header')

	// 	menuItems.forEach((activeItem) => {
	// 		activeItem.classList.remove('active')
	// 	})

	// 	if (window.scrollY == 0) {
	// 		header.classList.remove('fixed-header')
	// 		scroll2Top.classList.remove('visible')
	// 	}

	// 	if (menuItems.length === 0) {
	// 		return
	// 	}

	// 	if (
	// 		window.scrollY >= 320 &&
	// 		scroll2Top.classList.contains('visible') == false
	// 	) {
	// 		scroll2Top.classList.add('visible')
	// 	}

	// 	titlesMarkup.forEach((title) => {
	// 		if (title.classList.contains('title-active')) {
	// 			title.classList.remove('title-active')
	// 		}
	// 	})

	// 	if (
	// 		window.scrollY >= 0 &&
	// 		window.scrollY < 1290 &&
	// 		menuItems[0].classList.contains('active') == false
	// 	) {
	// 		menuItems[0].classList.add('active')
	// 		titleNews.classList.add('title-active')
	// 	} else if (
	// 		window.scrollY >= 1290 &&
	// 		window.scrollY < 1835 &&
	// 		menuItems[1].classList.contains('active') == false
	// 	) {
	// 		menuItems[1].classList.add('active')
	// 		titlePhotos.classList.add('title-active')
	// 	} else if (
	// 		window.scrollY >= 1835 &&
	// 		window.scrollY < 2355 &&
	// 		menuItems[2].classList.contains('active') == false
	// 	) {
	// 		menuItems[2].classList.add('active')
	// 		titlePoll.classList.add('title-active')
	// 	} else if (
	// 		window.scrollY >= 2355 &&
	// 		window.scrollY < 2618 &&
	// 		menuItems[3].classList.contains('active') == false
	// 	) {
	// 		menuItems[3].classList.add('active')
	// 		titleMoments.classList.add('title-active')
	// 	} else if (
	// 		window.scrollY >= 2618 &&
	// 		menuItems[4].classList.contains('active') == false
	// 	) {
	// 		menuItems[4].classList.add('active')
	// 		titleVideos.classList.add('title-active')
	// 	}

	// 	setTimeout(function () {
	// 		const header = document.querySelector('header')

	// 		if (window.scrollY > 300) header.classList.add('header-hidden')
	// 	}, 2000)
	// })
})()
