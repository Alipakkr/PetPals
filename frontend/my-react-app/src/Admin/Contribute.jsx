import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
export const Contribute = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState("")
    const toast = useToast()
    let handleSubmit = (e)=>{
        e.preventDefault()

        let catObject={
            cat_name : fullName,
            location: email,
            breed : petBreed,
            age:age,
            adoption_fee:message,
            image_url:image
        }

        let dogObject= {
            name:fullName,
            location:email,
            breed : petBreed,
            age:age,
            price:message,
            image:image
        }

       if(petType=="cats"){
        axios.post("https://cute-erin-tick-hat.cyclic.cloud/cats/add", catObject)
        .then((res)=>{
            toast({
                title: 'Cats Data Added',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            console.log(res.data)
        })
        .catch((err)=>{
            toast({
                title: 'An Error Occured',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            console.log(err)
        })
       }
       if(petType=="dogs"){
        // axios.post("https://cute-erin-tick-hat.cyclic.cloud/dogs/add", dogObject)
        // .then((res)=>{
            toast({
                title: 'Dogs Data Added',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        //     console.log(res.data)
        // })
        // .catch((err)=>{
        //     toast({
        //         title: 'An Error Occured',
        //         status: 'error',
        //         duration: 2000,
        //         isClosable: true,
        //     })
        //     console.log(err)
        // })
       }
    }

  return (
    <div>
        <div>
            <div className="contribution-form-container">
      <br />
      <h2 className='header'>Contribute to Petfinder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Pet Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Location:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="petType">Pet Type:</label>
          <select id="petType"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required>
            <option >Select</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
          </select>
          
        </div>

        <div className="form-group">
          <label htmlFor="petBreed">Pet Breed:</label>
          <input
            type="text"
            id="petBreed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Adpotion Fees:</label>
          <input
            type='text'
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Image Url:</label>
          <input
            type='text'
            id="message"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button onClick={handleSubmit} style={{marginTop:"30px"}} className="Button" type="submit">Submit</button>
      </form>
    </div>
        </div>
    </div>
  )
}
