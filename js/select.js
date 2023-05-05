let lang__select__inner = document.querySelector('.lang__select__inner')
let lang__select = document.querySelector('.lang__select')
let lang__img_default = document.querySelector('.lang__img_default')


lang__select.addEventListener('click',()=>{
    console.log('okk');

    lang__select__inner.classList.toggle('my__flex')
    lang__img_default.classList.add('my__none')
})

lang__select.addEventListener('change',()=>{
    console.log('okghfghfk');

    
    lang__img_default.classList.remove('my__none')
    lang__img_default.classList.add('my__flex')
})

