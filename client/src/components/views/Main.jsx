import React,{useEffect, useState} from "react";
import axios from "axios";
import All from '../All'
import Form from '../Entry'


const Main = (props) => {

    const [plants, setPlants] = useState([])

    return (
        <div>
            <Form plants={plants} setPlants={setPlants} />
            <All plant={plants} setPlant={setPlants} />
        </div>
    )
}

export default Main
