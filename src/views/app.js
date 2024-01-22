const app = require("./server")
require("./database")

app.listen(app.get('port'), () => {
    console.log('Aplicacion en el puerto ' + app.get('port'))
})