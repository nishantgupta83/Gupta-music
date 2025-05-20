
function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for(let section of sections) {
        section.style.display = 'none';
    }
    
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}
