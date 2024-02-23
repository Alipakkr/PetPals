import React from 'react'
import './styles/petcard.css'
const Petcards = () => {
  return (
    <div className="pet-card">
        <div className="pet-card-inn">
          <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="dog" />
          <p className='petname'>Tommy</p>
          <p className="pettype">Rotwiller</p>
          <div className="age-gender">
            <div className="age">
              <p>Age</p>
              <p>2</p>
            </div>
            <div className="gender">
              <p>Gender</p>
              <p>Male</p>
            </div>
          </div>
          <button>Know more</button>
        </div>
    </div>
  )
}

export default Petcards