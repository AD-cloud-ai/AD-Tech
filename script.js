function showSidebar() {
    const sidebar = document.querySelector('.Responsive-menu');
    sidebar.style.display = 'block';
}

// Optional: Auto-hide sidebar if clicked outside of it
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.Responsive-menu');
    // const menuIcon = document.querySelector('.menu-icon');

    if (
        sidebar.style.display === 'block' &&
        !sidebar.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        hideSidebar();
    }
});



document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider a img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds
});