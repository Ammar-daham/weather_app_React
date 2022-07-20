import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import GetWeatherInfo from './weatherinfo';



const FormComponent = () => {

    // Use state
    const [citySearch, setCitySearch] = useState('');
    const [weatherInfo, setWeatherInfo] = useState(null);

    // City search from submit
    const fetchCity = (e) => {
        e.preventDefault(e)
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=xb4ATyxDxMHAOAMUlcUCVFhz4hYuoS4l&q=${citySearch}`,{
            headers: {
               'Content-Type': 'application/json'
            } 
         })
        .then((response)=>{
            setCitySearch('');
            setWeatherInfo(response.data[0]);
        })
    }

    return (
        
        <div>
            <Form onSubmit={fetchCity}>
            <fieldset>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className='label'>City </Form.Label>
                <Form.Control id="disabledTextInput" placeholder="Enter city" className='inputValue' value={citySearch} onChange={(e)=>setCitySearch(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className='button'>Show weather info</Button>
            </fieldset>
            </Form>  
            {weatherInfo && (
                <GetWeatherInfo weatherInfo={weatherInfo} />
            )}
        </div>
       
    )
}

export default FormComponent;

