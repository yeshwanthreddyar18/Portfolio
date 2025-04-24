function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-contents');
    const links = document.querySelectorAll('.tab-links');

    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    links.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(`.tab-links[onclick*="${tabName}"]`).classList.add('active-link');
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});