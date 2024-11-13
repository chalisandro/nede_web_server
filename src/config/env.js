require('dotenv').config() // carga variables de entorno del archivo .env
const { get } = require('env-var') // manejar ñas variables de una forma robusta y valida

const envs = { //asignamos los calores port y path
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}