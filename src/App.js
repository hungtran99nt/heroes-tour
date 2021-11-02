import React, {useEffect, useState} from 'react';
import Heroes from "./heroes/heroes";
import axios from "axios";
import HeroesDetail from "./heroes-detail/HeroesDetail";
import Message from "./messages/Message";
import './App.css'

const App = () => {
    const [heroes, setHeroes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [logger, setLogger] = useState([]);
    const [selectedHero, setSelectedHero] = useState({});
    let push = true;

    useEffect(() => {
        let canceled = false;
        axios({
            method: 'GET',
            url: 'https://60dff0ba6b689e001788c858.mockapi.io/heroes'
        }).then(response => {
            if (!canceled) {
                setHeroes(response.data);
                console.log("response", response);
                setLoading(false);
                setLogger(logger => logger.concat(["HeroService: fetched heroes"]));
            }
        }).catch(error => {
            if (!canceled) {
                setLoading(false);
                setErrorMessage(error.message);
            }
        })
        return () => {
            canceled = true;
        }
    }, []);

    const handleChangeName = (event) => {
        let newHeroes = [...heroes];
        newHeroes[selectedHero.id - 1].name = event.target.value;
        setHeroes(newHeroes);
    };

    const handleSelected = hero => {
        setSelectedHero(hero);
        push = true;
        setLogger(logger => logger.concat([`HeroComponent: Selected hero id=${hero.id}`]));
    }
    const handleClear = () => {
        push = false;
        setLogger([]);
    }

    return (
        <div className="app-container">
            <h1>Tour of Heroes</h1>
            <h2>My Heroes</h2>
            {isLoading && <span>Loading</span>}
            {errorMessage && <span>{errorMessage}</span>}
            <div className="app-heroes">
                {heroes.map(hero => (
                    <Heroes
                        key={hero.id}
                        hero={hero}
                        selectedHero={selectedHero}
                        handleSelected={handleSelected}
                    />
                ))}
                <HeroesDetail
                    selectedHero={selectedHero}
                    handleChangeName={handleChangeName}
                />
                {push &&
                <Message
                    logger={logger}
                    handleClear={handleClear}
                />
                }
            </div>
        </div>
    );
};

export default App;