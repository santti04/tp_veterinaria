import express from 'express'
import { Usuario } from './usuario.js'


const app = express()

const usuarios=[
  new Usuario(
    123, 'Sofia', 'Coppari', 'soficoppari@gmail.com', 3413909090, 'camiysofi123', ['gato', 'perro']
  ),
]

app.get('/api/usuarios', (req, res) =>{

})


app.listen(3000,()=>{
  console.log('Server running on http://localhost:3000/')
})