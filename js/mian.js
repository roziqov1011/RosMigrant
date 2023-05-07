


let elLangBnts = document.querySelectorAll('.lang__btn')

elLangBnts.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        elLangBnts.forEach((item)=>{
            item.classList.remove('lang__active')
        })
        e.target.parentNode.classList.add('lang__active')
        console.log(e.target.parentNode.id);
    })
})