import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Body from "./Components/Body";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Load from "./Components/Load";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route path="/" exact component={Body}/>
                    <Route path="/load" exact component={Load}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
