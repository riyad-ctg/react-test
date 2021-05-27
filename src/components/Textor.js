import React, { useState } from 'react';
import useDelayCallBack from './useDelayCallBack';

const Textor = () => {

    const [text,setText] = useState('');
    const [postText,setPostText] = useState('');

    useDelayCallBack(() => {
        setPostText(text);
    },text)

    return ( 
        <React.Fragment>
            <input onChange={(e) => setText(e.target.value)}></input>
            <h3>{postText}</h3>
        </React.Fragment>
     );
}
 
export default Textor;