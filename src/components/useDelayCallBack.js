import {useEffect } from 'react';

function useDelayCallBack (callBack,text) {
    
    var timer;

    useEffect(() => {
        timer = setTimeout(() => {
            callBack();
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    },[text]);

    return null;
}
 
export default useDelayCallBack;