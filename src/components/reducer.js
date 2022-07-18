import { ACTIONS } from "../actions.js";
import { checkCity } from "../checkOrGive/checkCity.js";
import { cities } from "../cities.js";

export function reducer(state, { type, char }) {

    switch (type) {

        case ACTIONS.ADD_LETTER:
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

            if (state.nextCity.length === 1) {
                return state;
            }

            // if (!checkCity(cities, state.nextCity)) {
            //     return ({
            //         ...state,
            //         message: 'Not In a City List!',
            //         nextCity: state.randomCity[state.randomCity.length - 2].toUpperCase()
            //     })
            // }
            for (let i = 0; i < state.usedCities.length; i++) {
                if (state.usedCities[i] === state.nextCity) {
                    return ({
                        ...state,
                        message: "You already said that one!"
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
                usedCities: [...state.usedCities, currentCity]

            });
        case ACTIONS.START_TIMER:
            if (!state.started) return state;


            if (state.minutes === 0 & state.seconds === 0) {
                return ({
                    ...state,
                    message: 'Over',
                    started: false
                })
            }

            return ({
                ...state,
                minutes: state.minutes,
                seconds: char
            })


        default: return state;
    }
}