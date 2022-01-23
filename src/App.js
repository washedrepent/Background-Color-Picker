import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import axios from "axios";
import Color from "./Color";

function App() {
    const [colors, setCoulors] = useState([]);
    const [bgColor, setBgColor] = useState("#fff");

    //function to fetch data from the API
    const getData = useCallback(() => {
        axios
            .get(`https://random-data-api.com/api/color/random_color?size=10`)
            .then((res) => {
                setCoulors(res.data);
            });
    }, []);

    const changeBG = (hex) => {
        setBgColor(hex);
    };

    useEffect(() => {
        getData();
    }, [getData]);

    const colorList = colors.map((colour) => {
        return (
            <Color
                key={colour.id}
                name={colour.name}
                hex={colour.hex_value}
                changeBG={() => changeBG(colour.hex_value)}
            />
        );
    });

    return (
        <div className='App' style={{ backgroundColor: bgColor }}>
            <div className='container'>
                <header>
                    <h1>Background Color Picker</h1>
                </header>
                <button type='button' className='fetch-btn' onClick={getData}>
                    Get New Colors
                </button>
                <div className='colors-container'>{colorList}</div>
            </div>
        </div>
    );
}

export default App;
