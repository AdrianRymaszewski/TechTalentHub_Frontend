import {useSelector, useDispatch} from 'react-redux';
import { authSliceActions } from '../../Store/authSlice';
import {Grid, TextField, Typography } from "@mui/material";
import useFetch from '../../Hooks/use-fetch';
import Button from '../BasicComponents/Button/Button'
import Backdrop from '../BasicComponents/Backdrop/Backdrop';

const Login = () =>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)
    const email = useSelector((state) => state.auth.userData.email)
    const password = useSelector((state) => state.auth.userData.password)
    const {loading:loginLoading, error:loginError, sendRequest:loginFetch} = useFetch();


    const loginResponse =(response)=>{
        console.log(response)
    }
    
    const login = () =>{
        loginFetch({
            url:'someFancyURL',
            method:'POST', 
            body:{email:email, password:password}
        },
        loginResponse)
    }
    const emailChangeHandler = (value) =>{
        dispatch(authSliceActions.updateUserData({email:value, password:password}))
    }
    const passwordChangeHandler = (value) =>{
        dispatch(authSliceActions.updateUserData({email:email, password:value}))
    }

    return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
        <Grid container item justifyContent={'center'} mt={2} xs={3}>
            <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={20}>Email :</Typography></Grid>
            <Grid item xs={6}><TextField value={email} onChange={(e)=>{emailChangeHandler(e.target.value)}} fullWidth /></Grid>       
        </Grid>
        <Grid container item justifyContent={'center'} mt={2} xs={3}>
            <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={20}>Password :</Typography></Grid>
            <Grid item xs={6}><TextField value={password} onChange={(e)=>{passwordChangeHandler(e.target.value)}} fullWidth type='password'/></Grid>       
        </Grid>
        <Grid container item justifyContent={'center'}>
            <Grid container item justifyContent={'center'} mt={2} xs={12}>
                <Grid container justifyContent={'center'} alignItems={'center'} item xs={6} pr={3}>
                    <Typography fontSize={30}>Current Email: {email}</Typography>
                </Grid>
            </Grid>
            <Grid container item justifyContent={'center'} mt={2} xs={12}>
                <Grid container justifyContent={'center'} alignItems={'center'} item xs={6} pr={3}>
                    <Typography fontSize={30}>Current Password: {password}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid container justifyContent={'space-around'} mt={5}>
            <Button onClick={login} version={1} value={'Hello'}/>
            <Button onClick={login} version={2} value={'Hello'}/>
            <Button onClick={login} version={3} value={'Hello'}/>
        </Grid>
    </Grid>)
}
export default Login;