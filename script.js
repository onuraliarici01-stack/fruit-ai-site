// Click to toggle video playback
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const video = card.querySelector('video');
        if (!video) return;
        if (card.classList.contains('active')) {
            video.pause();
            card.classList.remove('active');
        } else {
            videoCards.forEach(c => {
                c.classList.remove('active');
                const v = c.querySelector('video');
                if(v) v.pause();
            });
            card.classList.add('active');
            video.play();
        }
    });
});
