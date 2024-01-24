const { server } = require("./server")
const config = require("../config/config")
const materiasRoutes = require('../routes/materias')
const { router } = require("../controllers/router")

router.use("/api", materiasRoutes)

server.use(router)

server.listen(server.get('port') || config.port, () => {
    console.log('Aplicacion en el puerto ' + server.get('port') || config.port)
})