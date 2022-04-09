import React from 'react';
import Particles from "react-tsparticles";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar';


function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <Navbar />
        </div>
    );
}

export default App;
