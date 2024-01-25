const app = require("./src/server/server")
const config = require("./src/server/config/config")
const materiasRoutes = require('./src/server/routes/materias')
const { router } = require("./src/server/controllers/router")

router.use("/api", materiasRoutes)

app.use(router)

app.listen(app.get('port') || config.port, () => {
    console.log('Aplicacion en el puerto ' + app.get('port') || config.port)
})