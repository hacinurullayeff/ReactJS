import React from 'react';
import Particles from "react-tsparticles";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/navbar';
import Header from './components/header';


function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
