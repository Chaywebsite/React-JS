import { BUY_CAKE } from "./cakeTypes"

const initialstate={
    noOfCakes:10
}

const Cakereducer=(state=initialstate,action)=>{
switch(action.type)
{
    case BUY_CAKE:
        {
        return{
            ...state,
            noOfCakes:state.noOfCakes-1
        }
    }
     default:
    return state

}
}
export default Cakereducer;
