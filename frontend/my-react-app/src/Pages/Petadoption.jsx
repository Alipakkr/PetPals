import React from 'react'
import './styles/adoption.css'


const Petadoption = () => {
    return (
        <div className="adopt-main-container">
            <div className="adoption-container">
                <div className="filtering-part">
                    <h2 className='filter-header-icon-text'>
                        <span className="filter-icon material-symbols-outlined">
                            filter_alt
                        </span>
                        <span>
                            Filter By
                        </span>
                    </h2>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Gender</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" name="gender" id="gendermale" />
                                Male
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="gender" id="genderfemale" />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Color</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" name="color" id="color-black" />
                                Black
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="color" id="color-brown" />
                                Brown
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="color" id="color-grey" />
                                Grey
                            </label>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Size</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Small
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Medium
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Large
                            </label>

                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="filter-item">
                        <p>Pet Type</p>
                        <div className="filter-inn">
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Dogs
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Cats
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Rabbits
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                                Birds
                            </label>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="displaying-part">
                    
                </div>
            </div>
        </div>
    )
}

export default Petadoption