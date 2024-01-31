document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.querySelector('.switch input')
    const body = document.body

    switchInput.addEventListener('change', function() {
        if (this.checked) {
            //L quitamos la clase por completo
            body.classList.replace('bg-ligth','bg-dark')
            document.getElementById('pie').classList.replace('div-terminos', 'div-terminosDark')
        } else {
            body.classList.replace('bg-dark', 'bg-ligth');
            document.getElementById('pie').classList.replace('div-terminosDark', 'div-terminos')
        }
    })
})