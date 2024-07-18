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

    //dark theme
    const body = document.body
    const btn = document.querySelector('#dark')
    btn.addEventListener('change', ()=>{
        if(!btn.checked){
            body.className = ''
            return;
        }
        body.className = 'dark-mode'
    })
    //burger
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('.burger-tags')

    burger.addEventListener('change', ()=>{
        if(burger.checked){
            menu.style.display = 'block'
        }else{
            menu.style.display = 'none'
        }
    })
})
