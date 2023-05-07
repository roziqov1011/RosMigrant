let lang__select = document.querySelector('.lang__select')
let lang__img_default = document.querySelector('.lang__img_default')


lang__select.addEventListener('change', (e)=>{
    console.log(e.target.value);
    lang__img_default.src = `./img/${e.target.value}.png`
})