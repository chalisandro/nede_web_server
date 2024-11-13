import express from 'express'

import path from 'path'

export const startServer = ({port, public_path = 'public'}) => {
    const app = express()

    //Para usar middlewares se usa USE
    app.use(express.static(public_path)) // contenido estatico disponible

    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(port,() => {
        console.log(`Escuchando en el puerto ${port}`);
    })
}