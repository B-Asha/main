// JavaScript to add dropdown interaction (optional)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-links li').forEach(function (item) {
        item.addEventListener('mouseover', function () {
            let dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });
        item.addEventListener('mouseout', function () {
            let dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });
});
