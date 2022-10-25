import React from 'react'
import Random from './Random'

const Funcional = (props) => {

    const { objeto } = props;
    return (
      <div>
        <p>Componente Funcional</p>
          
        <Random valorObjeto={objeto}/>
      </div>
    )
}

export default Funcional