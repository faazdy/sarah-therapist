document.addEventListener('DOMContentLoaded', ()=>{
    const enlacesHeader = document.querySelectorAll('.header a:not(#revs)');
    enlacesHeader.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})

