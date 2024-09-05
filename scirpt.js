const images = [
    'image3.jpg',
    'image1.webp',
    'image2.webp',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    currentImage.src = images[index];
    document.querySelector('.thumbnail-active').classList.remove('thumbnail-active');
    thumbnails[index].classList.add('thumbnail-active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        showImage(currentIndex);
    });
});

// Initialize the first thumbnail as active
thumbnails[0].classList.add('thumbnail-active');
