;(function () {
	function sample() {
		console.log('hello world')
	}

	window.addEventListener('DOMContentLoaded', function () {
		console.log('Load Fully Complete')
		sample()
	})
})()
