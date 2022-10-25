import React, { Component } from 'react'
import Random from './Random';

class Clase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { propiedad, objeto } = this.props;
        return(
            <div>
                <h1>Componente de clase</h1>
                <p><Random valorObjeto={objeto}/></p>
            </div>
            
        )
    }
}

export default Clase