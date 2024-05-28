document.addEventListener('DOMContentLoaded', () => {
    const skillSections = document.querySelectorAll('.skill-section');
    skillSections.forEach(section => {
      section.scroll({
        behavior: 'smooth'
      });
    });
  });