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
    const header = document.querySelector('header')
    const h2 = document.querySelectorAll('h2')
    const h3 = document.querySelectorAll('h3')
    const h4 = document.querySelectorAll('h4')
    const a = document.querySelectorAll('a:not(header a)')
    const theme = document.querySelector('#dark')
    const drklabel = document.querySelectorAll('#dark-label')

    //cards & containers
    const container1 = document.querySelector('#therapy')
    const container2 = document.querySelector('#contact')

    const card1 = document.querySelectorAll('.t-card')
    const card2 = document.querySelectorAll('.p-card')
    const formCard = document.querySelector('#form')
    theme.addEventListener('change', ()=>{
        if(!theme.checked){
            header.style.backgroundColor = ''
            body.style.backgroundColor = ''
            body.style.color = ''
            container1.style.backgroundColor = ''
            container2.style.backgroundColor = ''
            drklabel.forEach((e)=>{
                e.innerText = 'Dark'
            })
            h2.forEach((e)=>{
                e.style.color = ''
            })
            h3.forEach((e)=>{
                e.style.color = ''
            })
            h4.forEach((e)=>{
                e.style.color = ''
            })
            card1.forEach((e)=>{
                e.style.backgroundColor = ''
                e.style.color = ''
                e.style.borderColor = ''
            })
            card2.forEach((e)=>{
                e.style.backgroundColor = ''
                e.style.color = ''
            })
            formCard.style.backgroundColor = ''
            a.forEach((e)=>{
                e.style.color = ''
            })

            return;
        }
        drklabel.forEach((e)=>{
            e.innerText = 'Light'
        })
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.637)'
        body.style.backgroundColor = 'var(--bgcolorDark)'
        body.style.color = 'var(--bgcolor)'
        container1.style.backgroundColor = 'var(--bgDark2)'
        container2.style.backgroundColor = 'var(--bgDark2)'
        h2.forEach((e)=>{
            e.style.color = 'var(--bgcolor)'
        })
        h3.forEach((e)=>{
            e.style.color = 'var(--bgcolor)'
        })
        h4.forEach((e)=>{
            e.style.color = 'var(--bgcolor)'
        })
        card1.forEach((e)=>{
            e.style.backgroundColor = 'var(--color3)'
            e.style.color = 'var(--bgcolor)'
            e.style.borderColor = 'var(--color3)'
        })
        card2.forEach((e)=>{
            e.style.backgroundColor = 'var(--cardDark)'
            e.style.color = 'var(--bgcolor)'
        })
        formCard.style.backgroundColor = 'var(--color3)'
        a.forEach((e)=>{
            e.style.color = 'white'
        })
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


