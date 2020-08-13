window.addEventListener('load', function() {

    let inputRed = document.querySelector('#inputRed');
    let inputGreen = document.querySelector('#inputGreen');
    let inputBlue = document.querySelector('#inputBlue');

    inputRed.addEventListener('change', handleSlider);
    inputGreen.addEventListener('change', handleSlider);
    inputBlue.addEventListener('change', handleSlider);

    let inputScreenRed = document.getElementById('screenRed');
    let inputScreenGreen = document.getElementById('screenGreen');
    let inputScreenBlue = document.getElementById('screenBlue');

    inputScreenRed.value = inputRed.value;
    inputScreenGreen.value = inputGreen.value;
    inputScreenBlue.value = inputBlue.value;

    let square = document.getElementById('square');
    let title = document.querySelector('.title');

    function rgb(r, g, b) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    square.style.backgroundColor = rgb(inputScreenRed.value, inputScreenGreen.value, inputScreenBlue.value);
    title.style.color = rgb(inputScreenRed.value, inputScreenGreen.value, inputScreenBlue.value);
    
    function handleSlider() {
        inputScreenRed.value = inputRed.value;
        inputScreenGreen.value = inputGreen.value;
        inputScreenBlue.value = inputBlue.value;

        function rgb(r, g, b){
            return `rgb(${r}, ${g}, ${b})`;
        }
        
        square.style.backgroundColor = rgb(inputScreenRed.value, inputScreenGreen.value, inputScreenBlue.value);
        title.style.color = rgb(inputScreenRed.value, inputScreenGreen.value, inputScreenBlue.value);
    }
});