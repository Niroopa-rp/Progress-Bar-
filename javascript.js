document.addEventListener('DOMContentLoaded', () => {
    const literacyRate = 77.7; 
    function updateProgress(rate) {
        const progress = document.getElementById('progress');
        const rateLabel = document.getElementById('rate-label');
        progress.style.width = `${rate}%`;
        rateLabel.textContent = `${rate}%`;
    }
    updateProgress(literacyRate);
});
