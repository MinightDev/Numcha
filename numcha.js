document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.querySelector('.modal-img');
    const modalRotateButton = document.querySelector('.modal-rotate-button');
    const modalSubmitButton = document.getElementById('modalSubmitButton');
    const startButton = document.getElementById('startButton');
    const captchaResult = document.getElementById('captchaResult');

    let step = 0;
    let rotationAngle = 0;
    let userClickedOutsideModal = false;
    let captchaValid = 0;
    let maxImages = Math.floor(Math.random() * 3) + 3;
    let imageUrls = [
        'https://unsplash.it/200/206',
        'https://unsplash.it/200/207',
        'https://unsplash.it/200/208',
        'https://unsplash.it/200/209',
        'https://unsplash.it/200/210'
    ];

    modalSubmitButton.style.display = 'none';

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setImage(imageIndex) {
        if (imageIndex < maxImages)
        {
            const imageUrl = imageUrls[imageIndex];
            modalImage.src = imageUrl;
            rotationAngle = (Math.floor(Math.random() * 3) + 1) * 90;
            modalImage.style.transform = `rotate(${rotationAngle}deg)`;
            userClickedOutsideModal = false;
        } else {
            modal.style.display = 'none';
            if (userClickedOutsideModal)
            {
                setButtonState('fail');
                captchaResult.textContent = 'Invalid CAPTCHA. Please try again.';
                captchaResult.style.color = 'red';
                captchaValid = 1;
                imageUrls = shuffleArray(imageUrls);
            } else {
                setButtonState('success');
                captchaResult.textContent = 'CAPTCHA Verified!';
                captchaResult.style.color = 'green';
                captchaValid = 0;
            }
        }
    }

    function setButtonState(state)
    {
        startButton.className = `check-button ${state}`;
    }

    startButton.addEventListener('click', function() 
    {
        setButtonState('loading');
        step = 0;
        setImage(step);
        modal.style.display = 'block';
    });

    modalRotateButton.addEventListener('click', function()
    {
        rotationAngle += 90;
        modalImage.style.transform = `rotate(${rotationAngle}deg)`;
        modalImage.style.transition = 'transform 0.5s';
        modalSubmitButton.style.display = 'inline';
    });

    modalSubmitButton.addEventListener('click', function()
    {
        if (rotationAngle % 360 !== 0) {
            setButtonState('fail');
            captchaResult.textContent = 'Invalid CAPTCHA. Please try again.';
            captchaResult.style.color = 'red';
            modalSubmitButton.style.display = 'none';
            modal.style.display = 'none';
            captchaValid = 1;
            imageUrls = shuffleArray(imageUrls);
        } else {
            step++;
            setImage(step);
        }
        modalImage.style.transition = '';
        modalSubmitButton.style.display = 'none';
    });

    window.addEventListener('click', function(event)
    {
        if (event.target === modal)
        {
            setButtonState('fail');
            userClickedOutsideModal = true;
            captchaResult.textContent = 'Invalid CAPTCHA. Please try again.';
            captchaResult.style.color = 'red';
            modal.style.display = 'none';
            captchaValid = 1;
            imageUrls = shuffleArray(imageUrls);
            modalSubmitButton.style.display = 'none';
        }
    });
});
