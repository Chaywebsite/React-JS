import React from 'react';
import { buycake } from './cakeActions';
import {connect} from 'react-redux'


function CakeContainer(props)
{
    return(
        <div>
            <h1>Number of cakes : {props.noOfCakes}</h1>
            <button onClick={props.buycake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps=(state)=>
{
    return{
        noOfCakes:state.noOfCakes
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        buycake:()=>{
            dispatch(buycake())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);