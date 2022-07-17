import {INCREMENT, DECREMENT} from './types'

// action creators
export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}