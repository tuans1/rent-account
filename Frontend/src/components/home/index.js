import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';
function Home() {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const { counter, test } = useSelector(state => state.homeReducer);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
    });
    return (
        <>
            <div><h1>HOME PAGE</h1></div>
            <button onClick={() => dispatch(actions.counterUp())}>+</button>
            <input value={counter}></input>
            <button onClick={() => dispatch(actions.counterDown())}>-</button>
            {/* <Link to={{pathname : "/staff" ,state : 1000}} >
                Learn React
            </Link> */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </>
    )
}

export default Home;