import dataFamily from './data.js'

const nombre = document.getElementById('nombre')


dataFamily.forEach(unSoloIntegrante=>{
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    h1.textContent = unSoloIntegrante.nombreFamiliar
    h2.textContent = unSoloIntegrante.edad
    nombre.appendChild(h1)
    nombre.appendChild(h2)
})
