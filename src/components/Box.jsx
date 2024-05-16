import React, { useState } from 'react'
import image1 from '../components/bg.jpg'
function Box() {

  const [visible , setVisible]=useState(true);

const [data,setData]=useState({
  address:"",
  temp:"",
  condition:"",
  wind:"",

})
  const search=()=>{
    
    setVisible(false);
    const input = document.getElementById("weather");
    const value=input.value;
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=us&key=2PX57EWKJ5KM392AQB9CZR2CA&contentType=json`)
    .then(res=>res.json())
    .then(resp=>{
      setData(
          {
            address:resp.address,
            temp:resp.currentConditions.temp,
            condition:resp.currentConditions.conditions,
            wind:resp.currentConditions.windspeed
          }

      )
    })

  }
  const searchMore=()=>{
    setVisible(true)
  }


  
  return (

    <div >
      <img src={image1} alt=""  className=' absolute h-screen w-screen '/>
    {visible ?
    <div className=' z-20 flex h-screen flex-col justify-center items-center'>
      <div className='z-30 shadow-lg bg-white pt-3 rounded-3xl w-1/3 h-80'> 
        <h2 className='text-lg text-center  tracking-wide'>HELLOOO ! CHECK WEATHER HERE <span className='text-4xl '>🌞</span></h2>
      
       <div className='w-full h-full flex flex-col justify-center items-center'>

      <input id="weather" className='border-b-2 border-r-2 border-r-purple-400 border-b-sky-300 shadow-lg h-14 rounded-lg w-60 pl-3 text-2xl  ' type="text"placeholder='search here ..'/>
      
      <div className="w-full h-40 flex items-center justify-center cursor-pointer">
  <div onClick={search}
    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-purple-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black dark:bg-sky-300 dark:text-black dark:hover:text-black dark:shadow-none group"
  >
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple-400 group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-black"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-black"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black dark:group-hover:text-black" 
      >Search</span
    >
  </div>
</div>


       </div>
      
      </div>
    </div> :
    <div className='z-20 flex h-screen transition delay-300 ease-in-out flex-col justify-center items-center'>
    <div className='z-20 shadow-lg bg-white pt-3 rounded-3xl w-3/4 h-3/4'>
      <div className='w-full flex justify-center'>
      

      <div className=" h-40  cursor-pointer">
  <div onClick={searchMore}
    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-purple-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black dark:bg-purple-400 dark:text-black dark:hover:text-black dark:shadow-none group"
  >
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-sky-400 group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-black"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-black"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black dark:group-hover:text-black" 
      >Change Location </span
    >
  </div>
</div>

      
      </div>
      <div>
      <h2>Address :- {data.address}</h2>
      <h2>Condition :- {data.condition}</h2>
      <h2>Tempreature :- {data.temp}</h2>
      <h2>WindSpeed :- {data.wind}</h2>
    </div>
    </div>
    

    
    </div>
    }
    </div>
  )
}

export default Box
