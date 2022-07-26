import { ACTIONS } from "./actions.js";
import { checkCity } from "../CheckOrGenerate/checkCity.js";
import { cities } from "./cities.js";
import {randCity} from "../CheckOrGenerate/randomCity.js";
import { popularCities } from "./cities.js";

export function reducer(state, { type, char }) {

    switch (type) {

        case ACTIONS.ADD_LETTER:
        

            if (state.gameOver) return state;

            if (state.nextCity[state.nextCity.length - 1] === ' ') {
                return ({
                    ...state, nextCity: state.nextCity + char.toUpperCase()
                })
            }

            return ({
                ...state,
                nextCity: state.nextCity + char,
                message: ''
            });

        case ACTIONS.REMOVE_LETTER:
            if (state.gameOver) return state;
            
            if (state.nextCity.length === 1) {
                return state;
            };
            return ({
                ...state,
                nextCity: state.nextCity.slice(0, -1),
                message: ''
            });

        case ACTIONS.ENTER:
            if (state.gameOver) return state;

            state.nextCity = state.nextCity.trim()

    

            if (state.nextCity.length === 1) {
                return state;
            }

            if (!checkCity(cities, state.nextCity)) {
                return ({
                    ...state,
                    message: "Not in a city/country list!",
                    nextCity: state.randomCity[state.randomCity.length - 2].toUpperCase()
                })
            }

            for (let i = 0; i < state.usedCities.length; i++) {
                if (state.usedCities[i] === state.nextCity) {
                    return ({
                        ...state,
                        message: "Already said or it's displayed!"
                    })
                }
            }


            let currentCity = state.nextCity
            let nextOne = currentCity[currentCity.length - 2].toUpperCase()

            return ({
                ...state,
                randomCity: currentCity,
                nextCity: nextOne,
                started: true,
                guessed: state.guessed + 1,
                usedCities: [...state.usedCities, currentCity],

            });
        case ACTIONS.START_TIMER:
            if (!state.started) return state;

            if (state.seconds) {
                return ({
                    ...state,
                    seconds: state.seconds - 1
                })
            }
            if (state.minutes) {
                return ({
                    ...state,
                    minutes: state.minutes - 1,
                    seconds: 59
                })
            }
            if (state.minutes === 0 & state.seconds === 0) {
                return ({
                    ...state,
                    message: 'OVER!',
                    started: false,
                    gameOver: true,
                    nextCity: '',
                    randomCity: ''
                })
            }
            break;
        case ACTIONS.RESTART:

            let generatedCity = randCity(popularCities);
            let nextCity = generatedCity[generatedCity.length - 2].toUpperCase();
           

            return ({
                ...state,
                randomCity: generatedCity, nextCity: nextCity,
                message: '', guessed: 0, started: false, usedCities: [],
                minutes: 1, seconds: 20, gameOver: false
            })
       


        default: return state;
    }
}