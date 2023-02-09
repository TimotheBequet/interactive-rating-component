const script = {
    rateButtons: null,
    rate: '',

    init: function() {
        script.rateButtons = document.getElementsByTagName('li');
        for (let i=0; i < script.rateButtons.length; i++) {
            script.rateButtons[i].addEventListener('click', script.handleClickRating);
        }
        document.querySelector('.submit').addEventListener('click', script.handleSubmitClick);
    },

    handleClickRating: function(evt) {
        for (let i=0; i < script.rateButtons.length; i++) {
            script.rateButtons[i].classList.remove('selected');
        }        
        const element = evt.currentTarget;
        element.classList.toggle('selected');
        script.rate = element.textContent;
    },

    handleSubmitClick: function() {
        document.querySelector('.rate-container').classList.add('hidden');
        document.querySelector('.ty-container').classList.remove('hidden');
        document.querySelector('.rate').textContent = script.rate;
    },
}

document.addEventListener('DOMContentLoaded', script.init);