import React, { Component } from 'react';
import FilterResults from 'react-filter-search';
export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ''
        };
    };
    componentWillMount() {
        this.callApi()
            .then((res)=> {
                this.setState({data:res})
            })
            .catch(err => console.log(err));
    };
    callApi = async () => {
        const response = await fetch('http://localhost:9010/get/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    handleChange=event => {
        const { value } = event.target;
        this.setState({ value });
    };

    render() {
        const { data, value } = this.state;

        return (
          <div id="body" className="mt-3">
              <div className="d-flex flex-row width-expand mb-3">
                  <form className="form-inline width-expand-90  justify-content-center">
                      <input className="form-control width-50 mr-2" type="search" placeholder="Search"
                             aria-label="Search" onChange={this.handleChange} />
                      <button className="btn btn-outline-success width-120 my-2 my-sm-0" type="submit">Search
                      </button>
                  </form>
              </div>
              <FilterResults
                  value={value}
                  data={data}
                  renderResults={results => (
                      <div>
                          <table className="table table-hover">
                              <thead>
                              <tr>
                                  <th width="40%" scope="col">Codigo</th>
                                  <th width="60%" scope="col">Nombre</th>

                              </tr>
                              </thead>
                              <tbody>
                          {results.map(el => (
                              <tr key={el.codigo}>
                                  <td>{el.codigo}</td>
                                  <td>{el.nombre}</td>
                              </tr>
                          ))}
                              </tbody>
                          </table>
                      </div>
                  )}
              />
          </div>
        );
    }
}
