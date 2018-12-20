import React, {Component} from 'react';

export default class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo: '',
            nombre: '',
            redirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
        console.log(this.state);
    };

    handleSubmit = async event => {
        event.preventDefault();
        await fetch('http://localhost:9010/load', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "codigo": this.state.codigo,
                "nombre" : this.state.nombre
            })
        }).then(response=>{console.log(response)})
          .catch(e=>{console.log(e)});
    };

    render() {
        return (
            <div className="col-12 justify-content-center d-flex flex-row  p-2">
                <div className="col-8 p-2">
                <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form-group">
                        <label htmlFor="codigoProducto">Codigo Producto</label>
                        <input type="text" className="form-control" name="codigo" id="codigoProducto"
                               aria-describedby="emailHelp" placeholder="enter code products"
                               onChange={this.handleChange} value={this.state.codigo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombreProducto">Nombre Producto</label>
                        <input type="text" className="form-control" name="nombre" id="nombreProducto"
                               placeholder="enter name of produt"  onChange={this.handleChange} value={this.state.nombre} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
    );
    }
    }
