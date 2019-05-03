var CNF = CNF || {}

CNF.cenefas = {
    getRandomCenefa: function getRandomCenefa() {

        var cenefasRepository = [
            "https://i.imgur.com/mRHteRp.png",
            "https://i.imgur.com/RsbOWFV.png",
            "https://i.imgur.com/kPE9wjC.png",
            "https://i.imgur.com/OjJMxtI.png",
            "https://i.imgur.com/ldQycBs.png",
            "https://i.imgur.com/3asCVG1.png"
        ]
        var summerCenefasRepository = [
            "https://i.imgur.com/uqzABwH.png",
            "https://i.imgur.com/Ms3oeQW.png",
            "https://i.imgur.com/sR935Hf.png",
            "https://i.imgur.com/ToXqdrO.png",
            "https://i.imgur.com/mRHteRp.png"
        ]
        var currentMonth = new Date().getMonth();
        var selectedRepository = cenefasRepository;

        if (currentMonth >= 6 && currentMonth <= 9) {
            selectedRepository = summerCenefasRepository;
        }
        var ammountOfCenefas = selectedRepository.length
        var randomPosition = Math.floor(Math.random() * ammountOfCenefas);
        return selectedRepository[randomPosition];
    },

    addCenefas: function addCenefas(images) {
        images.map(function(image) {
            if (!image.cenefada) {
                var cenefa = document.createElement('div');
                cenefa.style.backgroundImage = "url(" + CNF.cenefas.getRandomCenefa() + ")";
                cenefa.style.height = '100%';
                cenefa.style.position = 'absolute';
                cenefa.style.width = '100%';
                cenefa.style.backgroundSize = 'contain';
                cenefa.style.zIndex = '9999%';
                cenefa.style.bottom = '0';
                cenefa.style.left = '0';
                cenefa.style.pointerEvents = 'none';
                cenefa.style.backgroundRepeat = "no-repeat";
                cenefa.style.backgroundPosition = "center";
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


window.setInterval(function() {
    CNF.cenefas.init();
}, 1000)