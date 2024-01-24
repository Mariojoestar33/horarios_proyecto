const app = require("./server")
require("./database")
const {Materia} = require("../models/materia")

// Ruta para obtener todas las materias
app.get('/materias', async (req, res) => {
    try {
      const materias = await Materia.find()
      res.json(materias) // Envía las materias como respuesta en formato JSON
    } catch (error) {
      res.status(500).json({ message: `${error.message}`})
    }
  })

app.listen(app.get('port'), () => {
    console.log('Aplicacion en el puerto ' + app.get('port'))
})