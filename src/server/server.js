const express = require('express')
const path = require('path')

// const startServer = ((options) => {
//     const {port,public_path = 'public'} = options
//     console.log(port);
//     console.log(public_path);
// })

const startServer = ({port, public_path = 'public'}) => {
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

module.exports = {
    startServer
}
