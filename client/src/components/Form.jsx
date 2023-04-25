import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
            <h1>Add New Entry</h1>
            <div>
              <label for='name'>Plant Name:</label>
              <input type='text' id='name' />
            </div>
            <div>
              <label for='date'>Date Plated:</label>
              <input type='date' id='date' />
            </div>
            <div>
              <label for='water'>Water Care:</label>
              <input type='text' id='water' />
            </div>
            <div>
              <label for='sunlight'>Sunlight Care:</label>
              <input type='text' id='sunlight' />
            </div>
            <div>
              <label for='notes'>Notes:</label>
              <textarea cols={50} rows={5} id='notes' />
            </div>
            <div>
              <label for='observations'>Observations:</label>
              <textarea cols={50} rows={5} id='observations' />
            </div>
            <div>
              <label for='outcome'>Outcomes:</label>
              <textarea cols={50} rows={5} id='outcome' />
            </div>
        </form>
    </div>
  )
}

export default Form