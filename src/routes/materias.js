const { router } = require("../controllers/router")
const { client } = require("../views/database")
const { materia, database } = require("../models/materiaModel")
const config = require("../config/config")

// Ruta para obtener todas las materias
router.get('/materias', async (req, res) => {
    try {
      await client.connect()
      await database.command({ ping: 1 })
      console.log("Conexion EXITOSA a Cluster")
      let query = {}
      let materias = await materia.find(query).toArray()
      if (materias.length === 0) {
        console.log("No se pudieron cargar las materias")
        res.status(404).json({ mensaje: "No se pudieron cargar las materias"})
      } else {
        console.log("Datos recogidos EXITOSAMENTE")
        res.json(materias)
      }
    } finally {
      await client.close()
    }
})

//Ruta para obtener la materia especifica
router.get(`/materias/:materia`, async (req, res) => {
    try {
      const buscar = req.params.materia
      await client.connect()
      await client.db(config.dbName).command({ ping: 1 })
      console.log("Conexion EXITOSA a Cluster")
      let query = {Asignatura: `${buscar}`}
      let materias = await materia.find(query).toArray()
      if (materias.length === 0) {
        console.log("No se encontraron datos para la materia especificada")
        res.status(404).json({ mensaje: 'No se encontraron datos para la materia especificada' })
    } else {
            console.log("Datos recogidos EXITOSAMENTE")
            res.json(materias)
        }
    } finally {
      await client.close()
    }
})

module.exports = router