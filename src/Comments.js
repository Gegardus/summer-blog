import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from './redux/actions'
import uniqid from 'uniqid'
import SingleComment from "./SingleComment";

function Comments(props) {
    const [textComment, setTextComment] = useState('')
    // now we get comments from redux store
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });
    // console.log('comments > ', comments);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        // console.log('input >>> ', e.target.value);
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // now we should dipatch created comment using hooks
        console.log('submit textComment ', textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment, id));        
    }

    useEffect(() => {
        dispatch(commentsLoad());
      }, [commentsLoad]); // eslint-disable-line react-hooks/exhaustive-deps

     console.log('COMMENT >>> ', comments)

    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!! comments.length && comments.map(res => {
                return  <SingleComment key={res.id} data={res} />
            })
            }
           
        </div>
    )
}

export default Comments;
