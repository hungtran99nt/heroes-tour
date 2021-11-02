import React from 'react';
import './heroes.css'

const Heroes = ({hero, selectedHero, handleSelected}) => {
    console.log({handleSelected, selectedHero})
    return (
        <li
            className="heroes"
            onClick={() => handleSelected(hero)}
        >
            <span className="badge">{hero.id}</span> {hero.name}
        </li>
    );
};

export default Heroes;