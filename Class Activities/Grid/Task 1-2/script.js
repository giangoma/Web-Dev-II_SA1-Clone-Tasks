function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

// This closes sidebar if clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && !sidebar.classList.contains('hidden')) {
        sidebar.classList.add('hidden');
    }
});
