const container = document.querySelector('.container');
const full = document.querySelector('.full')
const thum = document.querySelectorAll('.thum');

container.addEventListener('click', function(e){

	// mengecek gambar mana yang di klik
	if(e.target.className == 'thum') {
		full.src = e.target.src;
		full.classList.add('fade');

		setTimeout(function() {
		full.classList.remove('fade');

		}, 500)

		thum.forEach(function(thum) {

			thum.className = 'thum';
		});
		
		e.target.classList.add('active');
	}
});