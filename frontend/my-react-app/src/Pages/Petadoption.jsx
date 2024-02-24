import React, { useEffect, useState } from 'react';
import './styles/adoption.css';
import Petcards from '../components/Petcards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from '../Redux/action';
import Loading from '../components/Loading';

const Petadoption = () => {
    const [filters, setFilters] = useState({
        gender: '',
        color: [],
        age: [],
        pettype: ''
    });

    const store = useSelector((store) => store.pets);
    const isLoading = useSelector((store) => store.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPets(filters)); // Fetch pets based on current filters
    }, [dispatch, filters]);

    const handleGenderChange = (gender) => {
        setFilters({ ...filters, gender });
    };

    const handleColorChange = (color) => {
        const updatedColor = filters.color.includes(color)
            ? filters.color.filter((c) => c !== color)
            : [...filters.color, color];
        setFilters({ ...filters, color: updatedColor });
    };

    const handleSizeChange = (size) => {
        const updatedSize = filters.age.includes(size)
            ? filters.age.filter((s) => s !== size)
            : [...filters.age, size];
        setFilters({ ...filters, age: updatedSize });
    };

    const handlepettypeChange = (pettype) => {
        setFilters({ ...filters, pettype });
    };

    return (
        <div className="adopt-main-container">
            <div className="adoption-container">
                <div className="filtering-part">
                    <div className="filter-item">
                        <p>Gender</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" checked={filters.gender === 'male'} onChange={() => handleGenderChange('male')} />
                                Male
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.gender === 'female'} onChange={() => handleGenderChange('female')} />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Color</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" checked={filters.color.includes('black')} onChange={() => handleColorChange('black')} />
                                Black
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.color.includes('brown')} onChange={() => handleColorChange('brown')} />
                                Brown
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.color.includes('grey')} onChange={() => handleColorChange('grey')} />
                                Grey
                            </label>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Size</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" checked={filters.age.includes('puppy')} onChange={() => handleSizeChange('puppy')} />
                                puppy
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.age.includes('young')} onChange={() => handleSizeChange('young')} />
                                young
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.age.includes('adult')} onChange={() => handleSizeChange('adult')} />
                                Adult
                            </label>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Pet Type</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" checked={filters.pettype === 'dog'} onChange={() => handlepettypeChange('dog')} />
                                Dogs
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.pettype === 'cat'} onChange={() => handlepettypeChange('cat')} />
                                Cats
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.pettype === 'rabbit'} onChange={() => handlepettypeChange('rabbit')} />
                                Rabbits
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" checked={filters.pettype === 'bird'} onChange={() => handlepettypeChange('bird')} />
                                Birds
                            </label>
                        </div>
                    </div>
                </div>
                <div className='disp'>
                    {isLoading ? <Loading /> :
                        <div className="displaying-part">
                            {store.map((ele) => <Petcards key={ele._id} para={ele} />)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Petadoption;
