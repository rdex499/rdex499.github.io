// Lab Page Scripts - Table of Contents highlighting

document.addEventListener('DOMContentLoaded', function() {
    // Highlight active TOC section on scroll
    const sections = document.querySelectorAll('h2[id]');
    const tocLinks = document.querySelectorAll('.toc a');
    
    if (sections.length > 0 && tocLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
            
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
});