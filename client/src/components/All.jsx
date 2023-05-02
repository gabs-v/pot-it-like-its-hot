import React,{useEffect, useState} from 'react'
import axios from 'axios';

const All = (props) => {

    const {plants, setPlants} = props; 

    useEffect(() => {
      //using axios to get the allPlants api 
      axios.get("http://localhost:8000/api/plants")
      .then((res) => {
        console.log(res.data)
        setPlants(res.data)
      })
      .catch((err) => console.log(err))
    },[])


  return (
    <div>
      <div className='display'>
        {
          
          plants.map((plant) =>{
            return <h2 key={plant.id} >{plant.plantName}</h2>
          })
        }
      </div>
      
    </div>
  )
}

export default All