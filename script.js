document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.image-grid .box');
    const popupBox = document.getElementById('popupBox');
    const popupImage = document.getElementById('popupImage');
    const popupInfo = document.getElementById('popupInfo');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    let timeout;

    function showPopup(box) {
        const imgSrc = box.querySelector('img').src;
        const info = box.getAttribute('data-info');
        
        popupImage.src = imgSrc;
        popupInfo.textContent = info;
        
        popupBox.classList.add('show');
        overlay.classList.add('show');
    }

    function hidePopup() {
        popupBox.classList.remove('show');
        overlay.classList.remove('show');
    }

    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => showPopup(this), 200);
        });

        box.addEventListener('mouseleave', function() {
            clearTimeout(timeout);
            timeout = setTimeout(hidePopup, 200);
        });

        overlay.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            hidePopup();
        });
    });
});
