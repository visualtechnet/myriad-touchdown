;(function () {
	async function loadMenu() {
		displayMenu()
		loadNews()
		loadPhotos()
		loadMoments()
		loadMemorabilia()
	}

	async function loadNews() {
		const newsList = [
			{
				title:
					'Friday Night Steelers Six Pack of questions and open thread: Colts/Christmas Week Edition',
				excerpt:
					'There is always something to talk about when it comes to the black-and-gold! It’s Friday again, and Christmas, so it’s time for the six pack of questions. It seems as if Jeff and Dave come to a consensus in cutting to the chase... This week, I, Jeff, will be tasked with the questions up for discussion. The rules are still the same... Quick rundown of the ground rules. I’ll ask at least four questions strictly related to the Steelers. The rest of the questions could be about anything. Be respectful. Have fun talking about the...',
				link:
					'https://www.msn.com/en-us/news/us/friday-night-steelers-six-pack-of-questions-and-open-thread-colts-christmas-week-edition/ar-BB1ceyqH'
			},
			{
				title:
					'Injury Report: Ulysees Gilbert to IR, 4 others questionable for Sunday',
				excerpt:
					'On a positive note, Stephon Tuitt returned to practice on Friday. The Steelers finished up their preparation on Friday for their Week 15 matchup against the Indianapolis Colts where they look to end their three-game losing streak. In the final injury report for the Steelers for Week 16 courtesy of the Steelers PR Department, the Steelers have 4 players listed as questionable for Sunday. Steelers PR Department The Steelers made a roster move just minutes after releasing the injury report placing Ulysees Gilbert III on the...',
				link:
					'https://www.msn.com/en-us/sports/nfl/injury-report-ulysees-gilbert-to-ir-4-others-questionable-for-sunday/ar-BB1ceiX4'
			},
			{
				title:
					'NFL Odds and Predictions: Picking all the Week 16 games against the spread',
				excerpt:
					'Several of the BTSC staff pick all the NFL games both against the spread and over/under point totals The 2020 NFL season has made it through 15 weeks, and the Pittsburgh Steelers have already qualified for the postseason for the first time in three years. Unfortunately, their quality of play as of late has most fans concerned as they prepare for the playoffs with only 2 games remaining. For the 2020 NFL season, six of the BTSC staff (a group I have affectionately named the “BTSC Super Six”) have signed up to pick every game against the...',
				link:
					'https://www.behindthesteelcurtain.com/2020/12/25/22199374/nfl-odds-and-predictions-picking-all-the-week-16-games-against-the-spread-pittsburgh-steelers'
			},
			{
				title:
					'3 games to watch in Week 16 which give perspective to the 2020 Steelers',
				excerpt:
					'The only thing the Steelers should be worried about is their own game, but here are 3 other games to watch just in case. The Pittsburgh Steelers are looking to find something to get them back on track to finsih up the 2020 regular season. With only 2 games left, it is same to say the Steelers’ game is the only one that matters this week. But since that would make for a boring article, let’s look at 3 other games this week which might be important going forward. At the suggestion of one of our faithful BTSC community members, I’m going to...',
				link:
					'https://www.msn.com/en-us/sports/nfl/3-games-to-watch-in-week-16-which-give-perspective-to-the-2020-steelers/ar-BB1cebpf'
			},
			{
				title:
					'Blake Bortles quotes Simon and Garfunkel in return to Rams',
				excerpt:
					'With the news that Rams quarterback Jared Goff will undergo thump surgery and may or may not be back in time for the playoffs, Sean McVay’s team had to do something. They’re planning to start John Wolford, the former star of the Arizona Hotshots of the Alliance of American Football, where he led that short-lived league in passing touchdowns.',
				link:
					'https://www.msn.com/en-us/sports/nfl/blake-bortles-quotes-simon-and-garfunkel-in-return-to-rams/ar-BB1ciN24'
			}
		]

		displayNews(newsList)
	}

	async function loadPhotos() {
		const photoList = [
			{
				title: 'Football 150',
				url: 'photos/football-400.jpg'
			},
			{
				title: 'NFL Photo1',
				url: 'photos/nfl-photo1-400.jpg'
			},
			{
				title: 'NFL Photo2',
				url: 'photos/nfl-photo2-400.jpg'
			},
			{
				title: 'NFL Photo3',
				url: 'photos/nfl-photo3-400.jpg'
			},
			{
				title: 'NFL Photo4',
				url: 'photos/nfl-photo4-400.jpg'
			},
			{
				title: 'NFL Photo5',
				url: 'photos/nfl-photo5-400.jpg'
			},
			{
				title: 'NFL Photo6',
				url: 'photos/nfl-photo6-400.jpg'
			},
			{
				title: 'NFL Photo7',
				url: 'photos/nfl-photo7-400.jpg'
			}
		]

		displayPhotos(photoList)
	}

	async function loadMoments() {
		const momentsList = [
			{
				title: 'David Tyree',
				url: 'photos/moments/david-tyree.jpeg'
			},
			{
				title: 'James Harrison',
				url: 'photos/moments/james-harrison.jpeg'
			},
			{
				title: 'Ladainian Tomlinson',
				url: 'photos/moments/ladainian-tomlinson.jpeg'
			},
			{
				title: 'Len Dawson',
				url: 'photos/moments/len-dawson.jpeg'
			},
			{
				title: 'Odell Beckham',
				url: 'photos/moments/odell-beckham.jpeg'
			},
			{
				title: 'Steve Young and Brett Favre',
				url: 'photos/moments/steve-young-brett-favre.jpeg'
			}
		]

		displayMoments(momentsList)
	}

	async function loadMemorabilia() {
		const memo = [
			{
				title: 'Cardinal',
				url: 'photos/Cardinal-400.jpg'
			},
			{
				title: 'NYR Baseball',
				url: 'photos/NYR-Baseball-400.jpg'
			},
			{
				title: 'TML Pucks',
				url: 'photos/tml-pucks-400.jpg'
			}
		]

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
		const allSectionTitle = document.querySelectorAll(
			'.item-section .title'
		)
		const allSectionList = document.querySelectorAll(
			'.item-section .section-list'
		)

		const yOffset = -140
		const { top } = section.getBoundingClientRect()
		const y = top + window.pageYOffset + yOffset

		window.scrollTo({ top: y, behavior: 'smooth' })

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

		event.preventDefault()
		event.stopPropagation()
		return false
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
	window.addEventListener('scroll', function () {
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

		const allSectionTitle = document.querySelectorAll(
			'.item-section .title'
		)
		const allSectionList = document.querySelectorAll(
			'.item-section .section-list'
		)

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

		const scrollNews =
			titleNews.getBoundingClientRect().top + window.pageYOffset + yOffset
		if (
			window.scrollY > scrollNews &&
			window.scrollY < scrollNews + yOffsetUBound
		) {
			const menuText = menuItems[0].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(
				`#${menuText} .${menuText}`
			)
			menuItems[0].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollPhotos =
			titlePhotos.getBoundingClientRect().top +
			window.pageYOffset +
			yOffset
		//console.log('Photos ', window.scrollY, scrollPhotos, scrollPhotos + yOffsetUBound)
		if (
			window.scrollY > scrollPhotos &&
			window.scrollY < scrollPhotos + yOffsetUBound
		) {
			const menuText = menuItems[1].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(
				`#${menuText} .${menuText}`
			)

			menuItems[1].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollMoments =
			titleMoments.getBoundingClientRect().top +
			window.pageYOffset +
			yOffset
		//console.log('Moments ', window.scrollY, scrollMoments, scrollMoments + yOffsetUBound)
		if (
			window.scrollY > scrollMoments &&
			window.scrollY < scrollMoments + yOffsetUBound
		) {
			const menuText = menuItems[2].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(
				`#${menuText} .${menuText}`
			)

			menuItems[2].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}

		const scrollMemo =
			titleMemo.getBoundingClientRect().top + window.pageYOffset + yOffset
		console.log(
			'memo ',
			window.scrollY,
			scrollMoments,
			scrollMoments + yOffsetUBound
		)
		if (
			window.scrollY > scrollMemo &&
			window.scrollY < scrollMemo + yOffsetUBound
		) {
			const menuText = menuItems[3].innerHTML.toLowerCase()
			const sectionTitle = document.querySelector(`#${menuText} .title`)
			const sectionList = document.querySelector(
				`#${menuText} .${menuText}`
			)

			menuItems[3].classList.add('active')
			sectionList.classList.add('section-active')
			sectionTitle.classList.add('title-active')
		}
	})
})()
