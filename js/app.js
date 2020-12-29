;(function () {
	let menuList = null

	async function loadMenu() {
		const menuList = await fetch('./data/menu.json').then((data) =>
			data.json()
		)

		displayMenu(menuList)
		loadNews()
		loadPhotos()
		loadMoments()
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

	function handleMenuList() {
		const menuText = this.textContent.toLowerCase()
		const section = document.querySelector('#' + menuText)
		const header = document.querySelector('header')
		const allMenuItems = document.querySelectorAll('.menu-container li')

		section.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'end'
		})
		header.classList.add('fixed-header')

		allMenuItems.forEach(function (menu) {
			menu.classList.remove('active')
		})

		this.classList.add('active')
	}

	function displayMenu(list) {
		const menuContainer = document.querySelector('.menu-container')
		const fragmenItem = document.createDocumentFragment()

		list.forEach(function (item, index) {
			const liItem = document.createElement('li')
			liItem.textContent = item.title
			liItem.addEventListener('click', handleMenuList)

			if (index === 0) {
				liItem.classList.add('active')
			}
			fragmenItem.appendChild(liItem)
		})

		menuContainer.appendChild(fragmenItem)
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

	window.addEventListener('DOMContentLoaded', function () {
		loadMenu()
	})

	window.addEventListener('scroll', function () {
		const header = document.querySelector('header')
		const menuItems = document.querySelectorAll('.menu-container li')

		header.classList.add('fixed-header')

		switch (window.scrollY) {
			case 1290: {
				//photos
				menuItems[1].classList.add('active')
				break
			}
			case 1835: {
				//poll
				menuItems[2].classList.add('active')
				break
			}
			case 2355: {
				//moments
				menuItems[3].classList.add('active')
				break
			}
			case 2818: {
				//videos
				menuItems[4].classList.add('active')
				break
			}
			case 0: {
				header.classList.remove('fixed-header')
				menuItems[0].classList.add('active')
			}
		}
	})
})()
