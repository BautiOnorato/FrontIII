import React from 'react'
import perros from './dbPerros'

const ListaPerros = () => {
  return (
    <main>
        <h1>Clientes caninos de veterinaria</h1>
        <section>
            {perros.map((perro, index) => (
                  <div key={perro.id + index}>
                    <h2>{perro.nombre}</h2>
                    <ul>
                        <li>Edad: {perro.edad}</li>
                        <li>Sexo: {perro.sexo}</li>
                        <li>Raza: {perro.raza}</li>
                        <li>Tamaño: {perro.tamano}</li>
                    </ul>
                </div>
            ))}
        </section>
    </main>
  )
}

export default ListaPerros