window.addEventListener('load', () => {

    let divPodcasts = document.querySelector('.divPodcasts');
    let inputRange = document.querySelector('.inputRange');

    inputRange.addEventListener('input', handleInputRangeChange);
    showPodcastsFromFrequency('87.5');

    function handleInputRangeChange(event) {
        currentFrequency = event.target.value;

        let inputFrequency = document.querySelector('.inputFrequency');
        inputFrequency.value = currentFrequency + ' MHz';

        showPodcastsFromFrequency(currentFrequency);
    }

    function showPodcastsFromFrequency(frequency) {
        let hasPodcast = false;
        for(i=0; i < realPodcasts.length; i++) {
            let currentPodcast = realPodcasts[i];

            if(currentPodcast.id === frequency) {
                hasPodcast = true;

                if(hasPodcast) {
                    renderPodcast(currentPodcast);
                }
            } 

            if (!hasPodcast) {
                divPodcasts.textContent = "Nenhum podcast encontrado";
            }
        }
    }

    function renderPodcast(podcast) {
        divPodcasts.innerHTML= '';

        var img = document.createElement('img');
        img.src = './img/' + podcast.img;
        img.alt = 'Podcast ' + podcast.title;
        img.title = 'Podcast ' + podcast.title;

        var title = document.createElement('h2');
        title.textContent = podcast.title;

        var description = document.createElement('p');
        description.textContent = podcast.description;

        divPodcasts.appendChild(img);
        divPodcasts.appendChild(title);
        divPodcasts.appendChild(description);
    }
})


