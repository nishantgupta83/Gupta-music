function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for(let section of sections) {
        section.style.display = 'none';
    }
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
