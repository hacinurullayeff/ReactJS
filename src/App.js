import React from 'react';
import Particles from "react-tsparticles";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contactme from './components/Contactme'


function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <Navbar />
            <Header />
            <Contactme/>
        </div>
    );
}

export default App;
