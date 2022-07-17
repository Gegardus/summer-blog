import {connect} from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/actions';

function Likes (props) {
    console.log('render > ', props);
    return (
        <div className="button-controls">
          <button onClick={props.onIncrementLikes}> ❤ {props.likes} </button>
          <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

// 'state' from store is connected with props for this component
function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    const { likesReducer } = state; 
    return {
        // takes state likes from state in store
        likes: likesReducer.likes
    }
}

// action functions are connected with store
function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

// our react app component Likes we connect with redux
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
