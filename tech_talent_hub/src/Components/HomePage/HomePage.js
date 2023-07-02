import { Grid } from "@mui/material";
import Login from "../Login/Login";
import { useSelector, useDispatch } from "react-redux";
import Button from "../BasicComponents/Button/Button";
import { counterSliceActions } from "../../Store/counterSlice";
import Navbar from "../Navbar/Navbar";

const HomePage = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter)

    const increment = () => {
        dispatch(counterSliceActions.increment());
    }
    const decrement = () => {
        dispatch(counterSliceActions.decrement());
    }
    const incrementBy = () => {
        dispatch(counterSliceActions.incrementBy(5));
    }
    return(
        <Navbar />
        //<Login/>
        // <Grid container justifyContent={'space-around'} mt={5}>
        //     {counter}
        //     <Button onClick={decrement} version={2} value={'decrement'}/>
        //     <Button onClick={incrementBy} version={3} value={'incrementBy'}/>
        // </Grid>
    )
}
export default HomePage;