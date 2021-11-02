import React from 'react';
import './HeroesDetail.css'

const HeroesDetail = ({selectedHero, handleChangeName}) => {
    return (
        <div className="heroes-detail">
            <h2>
                <span style={{textTransform:"uppercase"}}>
                    {selectedHero.name} </span>
                Details
            </h2>
            <div><span>ID: </span>{selectedHero.id}</div>
            <div>
                <label htmlFor="hero-name">HERO NAME: </label>
                <input
                    id="hero-name"
                    type="text"
                    placeholder= {selectedHero.name}
                    onChange={handleChangeName}
                />
            </div>
        </div>
    );
};

export default HeroesDetail;