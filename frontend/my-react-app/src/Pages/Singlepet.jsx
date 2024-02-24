import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { GetSingleData } from '../Redux/action';
import './styles/singlepet.css'

const Singlepet = () => {
    const { petid } = useParams();
    console.log(petid);
    const state = useSelector((store) => store.pet);
    console.log(state);
    const loading = useSelector((store) => store.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetSingleData(petid))
    }, [petid]);
    return (
        <div className='main-ind-pet'>
            {loading ? <Loading /> :
                <div className="ind-pet">
                    <div className="img">
                        <img src={state.image} alt="" />
                    </div>
                    <div className="pet-about">

                    </div>
                </div>
            }
        </div>

    )
}

export default Singlepet