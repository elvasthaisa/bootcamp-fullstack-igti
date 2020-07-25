window.addEventListener('load', () => {

    let divPodcasts = document.querySelector('.divPodcasts');
    let inputRange = document.querySelector('.inputRange');

    inputRange.addEventListener('input', handleInputRangeChange);
    showPodcastsFromFrequency('87.5');

    function handleInputRangeChange(event) {
        currentFrequency = event.target.value;

        let inputFrequency = document.querySelector('.inputFrequency');
        inputFrequency.value = currentFrequency;

        showPodcastsFromFrequency(currentFrequency);
    }

    function showPodcastsFromFrequency(frequency) {
        let hasPodcast = false;
        for(i=0; i < realPodcasts.length; i++) {
            let currentPodcast = realPodcasts[i];

            if(currentPodcast.id === frequency) {
                hasPodcast = true;
            } 
            
            if(hasPodcast) {
                divPodcasts.textContent = "Há podcast aqui";
            } else {
                divPodcasts.textContent = "Nenhum podcast encontrado";
            }
        }
    }
})


// To do list
// - inputRange gravar o valor dele à medida que mexo no slider - ok
// - inputFrequency = inputFrequency (valor)
// - Aparecer uma mensagem específica a cada vez que chegar nas frequências desejadas