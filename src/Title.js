import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';

// instead of mapStateToProps, mapDispatchToProps functions here we use 
// useSelector and useDespath hooks to connect React with Redux

function Title(props) {
   console.log('props title > ', props)

   // we use useSelector to render new state
   const text = useSelector(state => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

   const dispatch = useDispatch();

   // now we should make so that all changes within input field go to redux and 
   // come back to component this should be done by means of payload
   const handleChange = (e) => {
    // console.log('handle text >>', e.target.value)
    dispatch(inputText(e.target.value))
   }
   
   return (
       <div className="card-title">
        <div className="card-title-top">
        <input type="text" onChange={handleChange} />
        </div>
        <p>{text}</p>
       </div>
    )
}

export default Title;