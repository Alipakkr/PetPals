import React from 'react'
import './styles/petcard.css'
import { useNavigate } from 'react-router-dom'
const Petcards = ({para}) => {
  const navigate = useNavigate();
  const handleOnclick = ()=>{
    navigate(`/pet/${para._id}`)
  }
  return (
    <div className="pet-card">
        <div className="pet-card-inn">
          <img style={{height:"250px"}} src={para.image} alt="pet" />
          <p className='petname'>{para.name}</p>
          <p className="pettype">{para.breed}</p>
          <div className="age-gender">
            <div className="age">
              <p>Age</p>
              <p>{para.age}</p>
            </div>
            <div className="gender">
              <p>Gender</p>
              <p>{para.gender}</p>
            </div>
          </div>
          <button onClick={handleOnclick}>Know more</button>
        </div>
    </div>
  )
}

export default Petcards