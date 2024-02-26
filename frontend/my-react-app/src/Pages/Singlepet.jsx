import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { GetSingleData } from '../Redux/action';
import './styles/singlepet.css'

const Singlepet = () => {
    const data = useLocation().state;
    // console.log(data);
    const { petid } = useParams();
    const navigate = useNavigate();
    const propdata = useSelector((store)=> store.pet);
    const state = useSelector((store) => store.pet);
    const loading = useSelector((store) => store.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetSingleData(petid))
    }, [petid]);
    const handleClick = ()=>{
        navigate('/address',{state:propdata});
    }
    return (
        <div className='main-ind-pet'>
            {loading ? <Loading /> :
                <div className="ind-pet">
                    <div className="img">
                        <img src={state.image} alt="" />
                    </div>
                    <div className="pet-about">
                        <h2>Details</h2>
                        <p className='ind-name'><span>Name: </span>{state.name}</p>
                        <p className='ind-breed'><span>Breed: </span>{state.breed}</p>
                        <p className='ind-age'><span>Age: </span>{state.age}</p>
                        <p className='ind-price'><span>Price: </span> {`$ ${state.price}`}</p>
                        <p className='about-left span-cls'>About</p>
                        <p className='about-left'>{`Introducing ${state.name}, a stunning ${state.breed} seeking a loving forever home. With a heart full of love, he/she adores human companionship and gets along famously with other pets. ${state.name}'s delightful personality shines through with his/her unique trait or behavior. Whether it's playtime in the park or cuddles on the couch, he/she is always up for it.`}</p>
                        <p className='about-left'>{`We are reluctantly seeking a new home for ${state.name} due to unforeseen circumstances. We kindly request potential adopters to have the time, space, and resources to provide a loving environment. Adoption fees apply to ensure the best match. If you're ready to welcome a loyal and devoted companion into your life, reach out to us at Your Contact Information. Help ${state.name} find happiness in a forever home!`}</p>
                        <button onClick={handleClick}>{`Adopt ${state.name}`}</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Singlepet