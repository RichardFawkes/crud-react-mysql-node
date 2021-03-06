import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export default class Main extends Component {
    constructor(props){
        super(props)
        this.state ={
            usuario: []
        }

    }
    componentDidMount(){
 fetch(`http:///52.67.53.27:3003/sistema/usuarios`)
 .then (usuario =>
    usuario.json().then(usuario => this.setState({usuario}))
    )
    }
    render() {

        
        const {usuario} = this.state;

        return usuario.map((usuario, index) => (

            
            <div className="usuario-list">



                <div key={index}>
                 <h3>Nome:{usuario.nome}</h3>
                 <article>
                 <strong>Salario: {new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(usuario.salario)}</strong>
                 <p class="btn-secondary"><Link to={`/usuario/${usuario.id}`}>Detalhes</Link></p>
                 
                 <br/>
                 </article>
 

                </div>
            </div>
        ))
        
        }
    
    }