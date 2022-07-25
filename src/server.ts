import express  from "express"
import mainRoutes from './routes/index'
import mustache from 'mustache-express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()


const server = express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())

//HABILITANDO O MÉTODO POST

server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

server.listen(process.env.PORT)