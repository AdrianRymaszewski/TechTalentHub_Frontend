import { Grid } from "@mui/material";
import Button from "../BasicComponents/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../Store/authSlice";
import LoginModal from "../Authentication/LoginModal/LoginModal";

const HomePage = ()=>{
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state=>state.auth.isModalOpen)
    

    return(
        <>
            <Grid container justifyContent={'center'} mt={10}>
                <Button onClick={()=>dispatch(authSliceActions.triggerModal(!isModalOpen))} variant={1} value={'Trigger Modal'}/>
            </Grid>
            {isModalOpen && <LoginModal/>}
        </>
    )
}
export default HomePage;