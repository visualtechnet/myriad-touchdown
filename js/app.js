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

	/**
	 * Function to handle Menu Click and to remove and set active section
	 * @param {object} event Actual Event Target Object
	 */
	function handleMenuList(event) {
		const menuText = this.textContent.toLowerCase()
		const section = document.querySelector('#' + menuText)
		const sectionTitle = document.querySelector(`#${menuText} .title`)
		const sectionList = document.querySelector(`#${menuText} .${menuText}`)
		const header = document.querySelector('header')
		const allMenuItems = document.querySelectorAll('.menu-container li a')
		const allSectionTitle = document.querySelectorAll('.item-section .title')
		const allSectionList = document.querySelectorAll('.item-section .section-list')

		const yOffset = -140
		const { top } = section.getBoundingClientRect()
		const y = top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth'})

		header.classList.add('fixed-header')

		allMenuItems.forEach(function (menu) {
			menu.classList.remove('active')
		})

		allSectionList.forEach(function (section) {
			section.classList.remove('section-active')
		})

		allSectionTitle.forEach(function (title) {
			title.classList.remove('title-active')
		})

		this.classList.add('active')
		sectionList.classList.add('section-active')
		sectionTitle.classList.add('title-active')

		event.preventDefault();
		event.stopPropagation();
		return false;
	}

	function displayMenu() {
		const liNews = document.querySelector('#liNews a')
		const liPhotos = document.querySelector('#liPhotos a')
		const liMoments = document.querySelector('#liMoments a')
		const liMemo = document.querySelector('#liMemo a')
		liNews.addEventListener('click', handleMenuList)
		liPhotos.addEventListener('click', handleMenuList)
		liMoments.addEventListener('click', handleMenuList)
		liMemo.addEventListener('click', handleMenuList)
	}


	/**
	 * Array List of news object to iterate and build
	 * @param {array} list
	 */
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

	/**
	 * Array List of Photos object to iterate and build
	 * @param {array} list
	 */
	function displayPhotos(list) {
		const photoContainer = document.querySelector('.photos')
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

	/**
	 * Array List of Moments object to iterate and build
	 * @param {array} list
	 */
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

	/**
	 * Array List of Memorabilia object to iterate and build
	 * @param {array} list
	 */
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

	/**
	 * Listener to highlight section when scrolled to. Highlight includes both the title and the unordered list
	 */
	window.addEventListener('scroll', function() {
		const yOffset = -160
		const yOffsetUBound = 160
		// const { top } = section.getBoundingClientRect()
		// const y = top + window.pageYOffset + yOffset;
		const header = document.querySelector('header')

		const menuItems = document.querySelectorAll('.menu-container li a')
		const titleNews = document.querySelector('.title-news')
		const titlePhotos = document.querySelector('.title-photos')
		const titleMoments = document.querySelector('.title-moments')
		const titleMemo = document.querySelector('.title-memorabilia')

		const allSectionTitle = document.querySelectorAll('.item-section .title')
		const allSectionList = document.querySelectorAll('.item-section .section-list')

		header.classList.add('fixed-header')
		menuItems.forEach(function (menu) {
			menu.classList.remove('active')
		})
		allSectionList.forEach(function (section) {
			section.classList.remove('section-active')
		})

		allSectionTitle.forEach(function (title) {
			title.classList.remove('title-active')
		})


		const scrollNews = titleNews.getBoundingClientRect().top + window.pageYOffset + yOffset
		if (window.scrollY > scrollNews && window.scrollY < (scrollNews + yOffsetUBound )) {
			const menuText = menuItems[0].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(`#${menuText} .${menuText}`)
			menuItems[0].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollPhotos = titlePhotos.getBoundingClientRect().top + window.pageYOffset + yOffset
		//console.log('Photos ', window.scrollY, scrollPhotos, scrollPhotos + yOffsetUBound)
		if (window.scrollY > scrollPhotos && window.scrollY < (scrollPhotos + yOffsetUBound )) {
			const menuText = menuItems[1].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(`#${menuText} .${menuText}`)

			menuItems[1].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollMoments = titleMoments.getBoundingClientRect().top + window.pageYOffset + yOffset
		//console.log('Moments ', window.scrollY, scrollMoments, scrollMoments + yOffsetUBound)
		if (window.scrollY > scrollMoments && window.scrollY < (scrollMoments + yOffsetUBound )) {
			const menuText = menuItems[2].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(`#${menuText} .${menuText}`)

			menuItems[2].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollMemo = titleMemo.getBoundingClientRect().top + window.pageYOffset + yOffset
		console.log('memo ', window.scrollY, scrollMoments, scrollMoments + yOffsetUBound)
		if (window.scrollY > scrollMemo && window.scrollY < (scrollMemo + yOffsetUBound )) {
			const menuText = menuItems[3].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(`#${menuText} .${menuText}`)

			menuItems[3].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

	})

})()
