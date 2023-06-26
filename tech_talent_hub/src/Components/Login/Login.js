import {useSelector, useDispatch} from 'react-redux';
import { authSliceActions } from '../../Store/authSlice';
import { Grid } from "@mui/material";


const Login = () =>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)

    const login = () =>{
        dispatch(authSliceActions.login())
    }
    const logout = () =>{
        dispatch(authSliceActions.logout())
    }

    return (
    <Grid container>
        <Grid container item justifyContent={'center'} mt={2}>
            <button onClick={isLoggedIn ? logout : login }>Change state in redux</button>
        </Grid>
        <Grid container item justifyContent={'center'}>
            {isLoggedIn ? <h1>true</h1> : <h1>false</h1>}
        </Grid>
    </Grid>)
}
export default Login;