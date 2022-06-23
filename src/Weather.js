import React from "react";
import axios from "axios";

export default function Weather()
{
    function handleResponse(response) {
        return (`The weather in London is ${response.data.main.temp} C `)
    }
    let apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return (
        <h1>
            Hello Landes! Time to go surfing!
        </h1>
    );
}