import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css";

export default function Home() {
    const [color, setColor] = useState("white");
    const location = useLocation();

    const changeBackgroundColor = () => {
        const myColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = myColor;
        setColor(myColor); 
    };

    useEffect(() => {
        // Reseting the  background color to white when navigating away from the page
        return () => {
            document.body.style.backgroundColor = 'white';
            setColor('white');
        };
    }, [location]);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Välkommen!</h1>
            <h2 style={{ textAlign: 'center' }}>👇</h2>
            <div className="App" style={{ backgroundColor: color }}>
                <header onClick={changeBackgroundColor}>
                    <button className='homebutton'>här</button>
                </header>
            </div>
        </div>
    );
}