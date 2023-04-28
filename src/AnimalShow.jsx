import { useState } from 'react'
import bird from './svg/bird.svg'
import cat  from './svg/cat.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import './AnimalShow.css'

const svgMap ={

  bird,
  cat,
  cow,
  gator,
  horse

}


const AnimalShow = ({type}) => {

  const [count, setCount] = useState(0)
 const handleClick =() =>{
  setCount (count + 1)
 }

  return (
    <div onClick={handleClick} >

      <div className='animal-show'>

      <img className = 'animal' src={svgMap[type]} alt="animal" />
      <img className = 'heart'
      src={heart} 
      alt="heart" 
      style={{width: 10 + 10 * count + "px"}}
      />

      </div>
    </div>
  )
}

export default AnimalShow