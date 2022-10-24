import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

// Configuração do Express
export const app = express()

app.use(express.json())
app.use(cors())


// Função que faz o servidor escutar as requisições vindas da porta definida.
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 }) 