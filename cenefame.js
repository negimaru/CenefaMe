var CNF = CNF || {}

CNF.cenefas = {
	addCenefas: function addCenefas(images) {
		images.map(function (image) {
			if (!image.cenefada) {
				var cenefa = document.createElement('div');
				cenefa.style.backgroundImage = "url(https://www.vinilosconencanto.com/578-large_default/vinilo-cenefa-triangulos.jpg)";
				cenefa.style.height = '100%';
				cenefa.style.position = 'absolute';
				cenefa.style.width = '100%';
				cenefa.style.backgroundSize = 'contain';
				cenefa.style.zIndex = '9999%';
				cenefa.style.bottom = '0';
				cenefa.style.left = '0';
				cenefa.style.pointerEvents = 'none';
				image.parentNode.insertBefore(cenefa, image);
				image.cenefada = true;
			}
		})
	},
	searchImages: function searchImages() {
		var images = Array.from(document.getElementsByTagName('img'))
		return images;
	},
	init: function init() {
		var imagesToCenefar = this.searchImages();
		this.addCenefas(imagesToCenefar);
	}

}


window.setInterval(function () {
	CNF.cenefas.init();
}, 1000)
