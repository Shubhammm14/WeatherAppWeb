import React from 'react';
import { GiWindsock } from "react-icons/gi";

const Search = ({ search, setSearch, handleSubmit }) => {
  return (
    <div className='flex flex-row'>
         <div className="relative">
            <GiWindsock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input 
                type='text' 
                placeholder='Enter City Name' 
                value={search} 
                onChange={(event) => setSearch(event.target.value)}
                className='p-4 pl-12 pr-10 rounded-full bg-gray-100 text-purple-500 w-[20vw]'
            /> 
         </div>
         <button 
            onClick={handleSubmit} 
            className='bg-purple-400 text-lg rounded-lg p-2 w-[7vw] mx-5 hover:bg-purple-800 mt-2'
         >
            Search
         </button>
    </div>
  );
}

export default Search;
