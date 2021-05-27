import React, { useState, useEffect } from 'react';
import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';

const Cake = (props) => {
    return ( 
        <div>
            Number of cake : {props.numOfCakes}
            <button onClick={props.buyCake}>Buy</button>
        </div> );
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Cake);