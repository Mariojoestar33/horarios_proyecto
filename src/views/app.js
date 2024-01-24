const app = require("./server")
const config = require("../config/config")
const materiasRoutes = require('../routes/materias')
const { router } = require("../controllers/router")

router.use("/api", materiasRoutes)

app.use(router)

app.listen(app.get('port') || config.port, () => {
    console.log('Aplicacion en el puerto ' + app.get('port') || config.port)
})