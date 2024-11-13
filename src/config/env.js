import env from 'dotenv'
import envvar from 'env-var' // manejar las variables de una forma robusta y valida
env.config()

export const envs = { //asignamos los calores port y path
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

