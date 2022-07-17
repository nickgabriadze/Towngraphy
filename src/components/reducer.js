import { ACTIONS } from "../actions.js";
import { checkCity } from "../checkOrGive/checkCity.js";
import { cities } from "../cities.js";

export function reducer(state, { type, char }) {

    switch (type) {

        case ACTIONS.ADD_LETTER:

            if (char === ' ') {
                return ({
                    ...state,
                    nextCity: state.nextCity + char,
                    upper: true,
                    message: ''
                })
            }
            if (state.upper === true) {
                return ({
                    ...state,
                    nextCity: state.nextCity + char.toUpperCase(),
                    upper: false,
                    message: ''
                });
            }

            return ({
                ...state,
                nextCity: state.nextCity + char,
                upper: false,
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
            if (!checkCity(cities, state.nextCity)) {
                return ({
                    ...state,
                    message: 'Not In a City List!',
                    nextCity: state.randomCity[state.randomCity.length - 2].toUpperCase()
                })
            }

            let currentCity = state.nextCity
            let nextOne = currentCity[currentCity.length - 2].toUpperCase()

            return ({
                ...state,
                randomCity: currentCity,
                nextCity: nextOne,
                started: true,
                guessed: state.guessed + 1,
            });

        default: return state;
    }
}