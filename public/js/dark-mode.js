document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.querySelector('.switch input')
    const body = document.body

    // Obtén la hora actual
    const currentHour = new Date().getHours()

    // Verifica si es después de las 5 de la tarde (17:00)
    const isNight = currentHour >= 17

    // Aplica el modo oscuro si es de noche
    if (isNight) {
        body.classList.replace('bg-ligth', 'bg-dark')
        document.getElementById('pie').classList.replace('div-terminos', 'div-terminosDark')
        switchInput.checked = true
    }

    // Agrega el evento de cambio para el interruptor
    switchInput.addEventListener('change', function() {
        if (this.checked) {
            body.classList.replace('bg-ligth', 'bg-dark')
            document.getElementById('pie').classList.replace('div-terminos', 'div-terminosDark')
        } else {
            body.classList.replace('bg-dark', 'bg-ligth')
            document.getElementById('pie').classList.replace('div-terminosDark', 'div-terminos')
        }
    })
})