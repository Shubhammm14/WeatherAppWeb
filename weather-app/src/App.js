// Importing necessary modules and components
import React, { useEffect, useState } from 'react'; // Import React and useState hook
import './App.css'; // Import CSS file for styling
import Search from './Component/Search'; // Import Search component
import Weather from './Component/Weather'; // Import Weather component

// Main App component
function App() {
  // State variable for search term and function to update it
  const [search, setSearch] = useState(''); // Initial value 'kolkata'
  const [citySearch,setCitySearch]=useState('kolkata')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [weatherData,setWeatherData]=useState()

  useEffect(()=>{
   fetchData();
  },[citySearch])
    
  async function fetchData(){
    setLoading(true)
    try {
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
        const data=await res.json();
        setWeatherData(data)
        console.log(data)
    } catch (error) {
      setError(error)
    }
    finally{
      setLoading(false)
    }
  }



function handleSubmit(){
    setCitySearch(search.charAt(0)+search.substring(1).toLowerCase())
    
  }
  if(loading){
    return <div> Loading...</div>
  }
  if(error){
    return <div>{error}</div>
  }
  // Render JSX
  return (
    <div className="flex items-center justify-center h-[100vh] bg-violet-900"> {/* Parent container */}
      {/* Search component with search term and setSearch function passed as props */}
      <div className='bg-purple-600 flex flex-center flex-col items-center  rounded-xl h-[90vh] w-[80vw]'>
      <div className='mt-20 mb-10'>
        <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit} CitySearch={citySearch}/>
      </div>
      {/* Weather component */}
      <div className='m-10'>
        <Weather data={weatherData}/>
      </div>
      </div>
    </div>
  );
}

// Export the App component as default export
export default App;
