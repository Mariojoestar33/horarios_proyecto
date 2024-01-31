const { router } = require("../controllers/router")
const { client } = require("../database/database")
const { materia, database } = require("../models/materiamodel")
const config = require("../config/config")

// Ruta para index
router.get('/', async (req, res) => {
  try {
    await client.connect()
    await database.command({ ping: 1 })
    console.log("Conexion EXITOSA a Cluster")
    //let query = {}
    //let materias = await materia.find(query).toArray()
    const materias = await materia.distinct('Asignatura')
    const profesores = await materia.distinct('Profesor')
    if (materias.length === 0) {
      console.log("No se pudieron cargar las materias")
      res.status(404).json({ mensaje: "No se pudieron cargar las materias"})
    } else {
      console.log("Datos recogidos EXITOSAMENTE")
      res.render('index', { pageTitle: "Materias Telematica UPIITA", materias, profesores })
      //res.json(materias)
    }
  } finally {
    await client.close()
  }
})

// Ruta para obtener todas las materias
router.get('/materias', async (req, res) => {
    try {
      await client.connect()
      await database.command({ ping: 1 })
      console.log("Conexion EXITOSA a Cluster")
      let query = {}
      let materias = await materia.find(query).toArray()
      //const materias = await materia.distinct('Asignatura')
      if (materias.length === 0) {
        console.log("No se pudieron cargar las materias")
        res.status(404).json({ mensaje: "No se pudieron cargar las materias"})
      } else {
        console.log("Datos recogidos EXITOSAMENTE")
        //res.render('index', { pageTitle: "Materias", materias, profesores })
        res.json(materias)
      }
    } finally {
      await client.close()
    }
})

//Ruta para obtener la materia especifica
router.get(`/materia`, async (req, res) => {
  try {
    const buscar = req.query.materia
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

//Ruta para obtener profesores especificos
router.get(`/profesor`, async (req, res) => {
  try {
    const buscar = req.query.profesor
    await client.connect()
    await client.db(config.dbName).command({ ping: 1 })
    console.log("Conexion EXITOSA a Cluster")
    let query = {Profesor: `${buscar}`}
    let profesor = await materia.find(query).toArray()
    if (profesor.length === 0) {
      console.log("No se encontraron datos para la materia especificada")
      res.status(404).json({ mensaje: 'No se encontraron datos para el maestro seleccionado' })
  } else {
          console.log("Datos recogidos EXITOSAMENTE")
          res.json(profesor)
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

//Ruta para obtener la materia especificando al profesor
router.get(`/materias/profesor/:profesor`, async (req, res) => {
  try {
    const buscar = req.params.profesor
    await client.connect()
    await client.db(config.dbName).command({ ping: 1 })
    console.log("Conexion EXITOSA a Cluster")
    let query = {Profesor: `${buscar}`}
    let materias = await materia.find(query).toArray()
    if (materias.length === 0) {
      console.log("No se encontraron datos para el profesor especificado")
      res.status(404).json({ mensaje: 'No se encontraron datos para el profesor especificado' })
  } else {
          console.log("Datos recogidos EXITOSAMENTE")
          res.json(materias)
      }
  } finally {
    await client.close()
  }
})

module.exports = router