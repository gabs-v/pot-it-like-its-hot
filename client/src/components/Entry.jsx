import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Form = (props) => {
  const {plants, setPlants} = props;
  const [plantName, setPlantName] = useState('')
  const [datePlanted, setDatePlanted] = useState(Date())
  const [waterCare,setWaterCare] = useState('')
  const [sunlight, setSunlight] = useState('')
  const [notes, setNotes] = useState('')
  const [observations, setObservation] = useState('')
  const [outcome, setOutcome] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/plants', {
      plantName,
      datePlanted,
      waterCare,
      sunlight,
      notes,
      observations,
      outcome
    })
    .then((res) => {
      console.log(res)
      console.log('submitted!')

      setPlants([...plants, res.data])
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h1>Add New Entry</h1>
            <div>
              <label for='name'>Plant Name:</label>
              <input type='text' id='name' onChange={(e) => setPlantName(e.target.value)} />
            </div>
            <div>
              <label for='date'>Date Plated:</label>
              <input type='date' id='date' onChange={(e) => setDatePlanted(e.target.value)}/>
            </div>
            <div>
              <label for='water'>Water Care:</label>
              <input type='text' id='water' onChange={(e) => setWaterCare(e.target.value)} />
            </div>
            <div>
              <label for='sunlight'>Sunlight Care:</label>
              <input type='text' id='sunlight' onChange={(e) => setSunlight(e.target.value)} />
            </div>
            <div>
              <label for='notes'>Notes:</label>
              <textarea cols={50} rows={5} id='notes' onChange={(e) => setNotes(e.target.value)} />
            </div>
            <div>
              <label for='observations'>Observations:</label>
              <textarea cols={50} rows={5} id='observations' onChange={(e) => setObservation(e.target.value)} />
            </div>
            <div>
              <label for='outcome'>Outcomes:</label>
              <textarea cols={50} rows={5} id='outcome' onChange={(e) => setOutcome(e.target.value)}/>
            </div>
            <input type='submit' value='Add!'/>
        </form>
    </div>
  )
}

export default Form