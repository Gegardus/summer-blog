import {connect} from 'react-redux'

function Likes (props) {
    console.log('render > ', props);

    return (
        <div className="button-controls">
          <button onClick={props.onIncrementLikes}> ❤ {props.likes} </button>
          <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

// 'state' from store should be connected with props in this component


function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    const { likesReducer } = state; 
    return {
        // takes state likes from state in store
        likes: likesReducer.likes
    }
}

// now we create connect function for actions
function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            console.log('click-plus');
            // here we use only type for action without any data
            // this action goes to reducer
            const action = {type: 'INCREMENT'}
            dispatch(action)
        },

        onDecrementLikes: () => {
            console.log('click-minus');
            // here we use only type for action without any data
            // this action goes to reducer
            const action = {type: 'DECREMENT'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);