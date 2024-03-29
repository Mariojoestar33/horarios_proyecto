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

// Ruta para obtener la lista de materias especificas
router.get(`/materia`, async (req, res) => {
  let as = req.query.materiasSeleccionadasInput
  if (!as) {
    return res.status(404).json({ mensaje: "No se seleccionaron materias"})
  } else {
      let listaMaterias = as.split(',').map(nombre => nombre.replace(/[\[\]"]/g, '').trim())
      try {
        await client.connect()
        await client.db(config.dbName).command({ ping: 1 })
        let consultas = listaMaterias.map(async (nombre) => {
          console.log("Materia: " +nombre)
          return await materia.find({ Asignatura: nombre }).toArray()
        })
        let materias = await Promise.all(consultas)
        if (materias.length === 0) {
          console.log("No se encontraron datos para las materias especificadas")
          return res.status(404).json({ mensaje: 'No se encontraron datos para las materias especificadas' })
        } else {
          console.log("Datos recogidos EXITOSAMENTE")
          res.json(materias)
        }
      } finally {
        await client.close()
      }
    }
})

// Ruta para obtener la lista de profesires especificos
router.get(`/profesor`, async (req, res) => {
  let as = req.query.profesoresSeleccionadasInput
  if (!as) {
    return res.status(404).json({ mensaje: "No se seleccionaron profesores"})
  } else {
      let listaProfesores = as.split(',').map(nombre => nombre.replace(/[\[\]"]/g, '').trim())
      try {
        await client.connect()
        await client.db(config.dbName).command({ ping: 1 })
        let consultas = listaProfesores.map(async (nombre) => {
          console.log("Profesor: " +nombre)
          return await materia.find({ Profesor: nombre }).toArray()
        })
        let profesores = await Promise.all(consultas)
        if (profesores.length === 0) {
          console.log("No se encontraron datos para los profesores especificados.")
          return res.status(404).json({ mensaje: 'No se encontraron datos para los profesores especificados.' })
        } else {
          console.log("Datos recogidos EXITOSAMENTE")
          res.json(profesores)
        }
      } finally {
        await client.close()
      }
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