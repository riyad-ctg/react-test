import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/icecreame/icecreamActions';

const CakeWithHook = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream);
    const dispatch = useDispatch();
    return ( 
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        <h2>Num of icecream - {numOfIceCream}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div> );
}
 
export default CakeWithHook;