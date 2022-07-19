import { useState, useEffect } from 'react';
// import { inputText } from './redux/actions';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions'

function SingleComment({data}) {
    // console.log('props single comment > ', props)
    // now every time new comment will be imported in useState
    const [commentText, setCommentText] = useState('');
    const {text, id } = data;
    const dispatch = useDispatch();

    // update concrete comment for that it should be pushed in redux and there be updated
    const handleUpdate = (e) => {
         e.preventDefault();
        //  console.log('submit >>>', commentText)
        dispatch(commentUpdate(commentText, id))
    }

    const handleDelete = (e) => {
        // console.log('click!')
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    useEffect(() => {
        if(text) {
            setCommentText(text);
        }
    }, [text]);

   // handles everything that we write upon current comment 
    const handleInput = (e) => {
    setCommentText(e.target.value);
   }

    return(        
            <form onSubmit={handleUpdate} className="comments-item">
                <div onClick={handleDelete} className="comments-item-delete">&times;</div>
                <input type="text" value={commentText} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>           
    )
}

export default SingleComment;
