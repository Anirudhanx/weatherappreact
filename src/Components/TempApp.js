import React, { useEffect, useState } from "react";
import "./Css/style.css";


const TempApp = () => {
    
    const[city,setCity] = useState(null);
    
    const[search, setSearch] =  useState("Mumbai");
    
    useEffect( ()  => {

        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=305ddc42d7b9c9c76c1f53eb099557d5`
            
            const response = await fetch(url)

            const resJson =await response.json();
            
            setCity(resJson.main);

        }


        fetchApi();
    }
   
    )
    

    return(

<>
    <div className="box">
    <div className="inputData">
        <input
        type="search"
        className="inputField"
        onChange  ={(event) => { setSearch(event.target.value)
            }}

        />
        </div>

{!city ? (
    <h1 className="temp">No Data Found</h1>

) : (
    <div>
    <div className="info">
        <h2 className="location">

        <i class="fas fa-map-marker-alt"></i>
        {search}

        </h2>

        <h1 className="temp">
            {city.temp}&#8451;

        </h1>

        <h3 className="tempmin_max">
            Min:{city.temp_min}&#8451; | Max:{city.temp_max}&#8451;
        </h3>

    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>


)}
</div>
</>

    )
}

export default TempApp;