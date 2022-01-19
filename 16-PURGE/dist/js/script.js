const btn = document.querySelector('#dark-mode')
const html = document.querySelector('html')
const texto = document.querySelector('#texto')

btn.addEventListener('click', function() {
    html.classList.toggle('dark')
    if (texto.textContent.includes('ON')) {
        texto.textContent ='OFF'
    } else {
        texto.textContent ='ON'
    }

})