// Image rotation for the gallery section

document.querySelectorAll('#mosaico-gallery-latest h3').forEach((h3, index) => {
    h3.addEventListener('mouseover', () => {
        const mainImageDiv = document.querySelector('.latest-gallery-main-image');
        switch (index) {
            case 0:
                mainImageDiv.style.backgroundImage = "url('img/gallery-cochinita-yucatan.png')";
                break;
            case 1:
                mainImageDiv.style.backgroundImage = "url('img/gallery-mexico-exports.png')";
                break;
            case 2:
                mainImageDiv.style.backgroundImage = "url('img/gallery-deportees-mexico.png')";
                break;
            case 3:
                mainImageDiv.style.backgroundImage = "url('img/gallery-raramuri-runner.png')";
                break;
            case 4:
                mainImageDiv.style.backgroundImage = "url('img/gallery-chihuahua-mexico.png')";
                break;
            case 5:
                mainImageDiv.style.backgroundImage = "url('img/gallery-mexican-crepes.png')";
                break;
            case 6:
                mainImageDiv.style.backgroundImage = "url('img/gallery-viva-aerobus.png')";
                break;
            case 7:
                mainImageDiv.style.backgroundImage = "url('img/gallery-trump-immigration.png')";
                break;
        }
    });
});