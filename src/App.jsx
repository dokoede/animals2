import { useState } from "react"
import AnimalShow from "./AnimalShow"
import './App.css'


function getRandonAnimal(){
    const animals =['bird','cat','cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}


const App = () => {

    const[animals, setAnimals]= useState([]);

    function handleClick(){

        setAnimals([...animals,getRandonAnimal()])

    }

    const renderedAnimals = animals.map((animal, index) =>{
        return <AnimalShow type={animal} key={index} />
    })
  return (
    <div className="app"> 

        <button onClick={handleClick}> Add animal</button>
        <div className="animal-list"> {renderedAnimals} </div>
        
    </div>
  )
}

export default App