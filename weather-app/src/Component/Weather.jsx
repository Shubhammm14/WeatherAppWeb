import React from 'react';
import { FaLocationDot, FaTemperatureArrowDown, FaTemperatureArrowUp, FaTemperatureHigh } from 'react-icons/fa6'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { IoMdCloud } from 'react-icons/io'
import { WiHumidity } from "react-icons/wi";
import { MdSpeed } from "react-icons/md";

const Weather = ({ data }) => {
    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1); // Convert Kelvin to Celsius and round to 1 decimal place
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        return currentDate.toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div>
            <div className='w-full text-5xl flex font-bold flex-col mb-10 text-purple-900'>
                <div className='flex flex-row'>
                {/* Render city name and country */}
                <FaLocationDot className='text-purple-900 text-4xl' />
                <div className='px-3'>
                {data?.name},
                <span>
                    {data?.sys.country}
                </span>
                </div>
                </div>
                <div className='text-lg px-10 py-2'>
                {/* Render current date */}
                {getCurrentDate()}
            </div>
            </div>
            <div className='text-3xl my-10 flex flex-row text-purple-900'>
            <IoMdCloud className='mx-2' />
                {data?.weather[0]?.description}
            </div>
            <div>
                <div className='text-2xl text-purple-900 flex'><FaTemperatureHigh className='mx-4' />Temp {kelvinToCelsius(data?.main.temp)}<TbTemperatureCelsius className='mx-1' /></div>
                
                <div className='flex flex-row text-lg text-purple-900 '><span className='m-4'><FaTemperatureArrowUp />Max Temp {kelvinToCelsius(data?.main.temp_max)}</span><span className='m-4'>
                <FaTemperatureArrowDown />Min Temp {kelvinToCelsius(data?.main.temp_min)}</span></div>
               
                
                <div className=' mt-10 text-2xl text-purple-900 flex flex-row'> <div><MdSpeed className='mx-3'/> Pressure {data?.main.pressure} </div>
                <div className='mx-10'>
                <WiHumidity className='mx-3 text-2xl' /> Humidity {data?.main.humidity}
                </div>
                </div>
                
            </div>
           
        </div>
    );
};

export default Weather;
