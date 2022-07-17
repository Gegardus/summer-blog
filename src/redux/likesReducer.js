import { INCREMENT, DECREMENT } from './types'

const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer > ', action)
    // first reducer returns new state but for this moment we have not state changing mechanism    
    // then when action is cretaed in component, it comes to reducer 
    switch(action.type) {
        case INCREMENT:
            return{
               // as we can't change state manually, first we put current state
               ...state,
               likes: state.likes + 1
            }
        case DECREMENT:    
            return{
              // as we can't change state manually, first we put current state
              ...state,
              likes: state.likes - 1
            }
        default:
            return state;
    }
}