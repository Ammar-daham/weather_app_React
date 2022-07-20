import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Sun from '../img/sun.png';
import Moon from '../img/moon.png'


const GetWeatherInfo = ({ weatherInfo }) => {
    console.log(weatherInfo)
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${weatherInfo.Key}?apikey=xb4ATyxDxMHAOAMUlcUCVFhz4hYuoS4l`,{
            headers: {
               'Content-Type': 'application/json'
            } 
         })
        .then((response) => {
            setData(response.data[0])
        })
    },[weatherInfo.Key])

    return (
        <>
            {data&&(
                <div className='locationBox'>
                    <h1 className='location'>
                        {weatherInfo.EnglishName}, {weatherInfo.Country.ID}
                    </h1>
                    <p className='date'> {new Date().toLocaleString() + ''}</p>
                    <div className='weather-box'>
                        <div className='temp'>
                            {data.Temperature.Metric.Value}° {data.Temperature.Metric.Unit}   
                        </div>
                        
                        <div>
                        <br/>
                            {data.IsDayTime === true && <img className='weather-img' src={Sun} alt='Sun'/>}
                            {data.IsDayTime === false &&<img className='weather-img' src={Moon} alt='moon'/> }
                        </div>
                        <div className='state'>
                            {data.WeatherText}
                        </div>     
                    </div>
                </div>
            )}
        </>
    )
}

export default GetWeatherInfo;
