
function showSection(sectionId) {
    // Hide all sections with fade out
    const sections = document.getElementsByClassName('content-section');
    for(let section of sections) {
        section.style.opacity = '0';
        section.style.display = 'none';
    }
    
    // Show selected section with fade in
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 50);
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
