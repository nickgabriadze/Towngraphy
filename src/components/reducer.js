import { ACTIONS } from "../actions.js";
import { checkCity } from "../checkOrGive/checkCity.js";
import { cities } from "../cities.js";

export function reducer(state, { type, char }) {

    switch (type) {

        case ACTIONS.ADD_LETTER:
            if(state.nextCity[state.nextCity.length - 1] === ' '){
                return({
                    ...state, nextCity: state.nextCity + char.toUpperCase()
                })
            }

            return ({
                ...state,
                nextCity: state.nextCity + char,
                message: ''
            });

        case ACTIONS.REMOVE_LETTER:

            if (state.nextCity.length === 1) {
                return state;
            };
            return ({
                ...state,
                nextCity: state.nextCity.slice(0, -1),
                message: ''
            });

        case ACTIONS.ENTER:
            state.nextCity = state.nextCity.trim()

            if(state.nextCity.length === 1){
                return state;
            }

            if (!checkCity(cities, state.nextCity)) {
                return ({
                    ...state,
                    message: 'Not In a City List!',
                    nextCity: state.randomCity[state.randomCity.length - 2].toUpperCase()
                })
            }
            for(let i = 0; i < state.usedCities.length; i++){
                if(state.usedCities[i] === state.nextCity){
                    return({
                        ...state,
                        message: "You already said that one!"
                    })
                }
            }
            let currentCity = state.nextCity
            let nextOne = currentCity[currentCity.length - 2].toUpperCase()
            console.log(state.usedCities)

            return ({
                ...state,
                randomCity: currentCity,
                nextCity: nextOne,
                started: true,
                guessed: state.guessed + 1,
                usedCities: [...state.usedCities, currentCity]

            });

        default: return state;
    }
}