import Backdrop from "../../BasicComponents/Backdrop/Backdrop";
import { createPortal } from "react-dom";
import {useSelector, useDispatch} from 'react-redux';
import { authSliceActions } from '../../../Store/authSlice';
import {Grid, TextField, Typography } from "@mui/material";
import useFetch from '../../../Hooks/use-fetch';
import Button from '../../BasicComponents/Button/Button';
import styles from './LoginModal.module.css';
import { LOGIN_URL } from "../../../Constants";

const LoginModal = () =>{

    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.userData.login.email)
    const password = useSelector((state) => state.auth.userData.login.password)

    const {loading:loginLoading, error:loginError, sendRequest:loginFetch} = useFetch();
    
    const loginResponse =(response)=>{
        console.log(response.token)
    }
    
    const login = () =>{
        loginFetch({
            url:LOGIN_URL,
            method:'POST',
            body:{email:email, password:password}
        },
        loginResponse)
    }
    const emailChangeHandler = (value) =>{
        dispatch(authSliceActions.updateLoginUserData({email:value, password:password}))
    }
    const passwordChangeHandler = (value) =>{
        dispatch(authSliceActions.updateLoginUserData({email:email, password:value}))
    }


    const closeModal=() =>{
        dispatch(authSliceActions.triggerLoginModal(false))
    }

    return(
        <>
            {createPortal(
                <div className={styles.login_modal}>
                    <Grid container justifyContent={'center'} alignItems={'center'} mt={10}>
                        <Grid container item xs={12} justifyContent={'center'}>
                            <Grid container item justifyContent={'center'} mt={2} xs={6}>
                                <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={30}>Email :</Typography></Grid>
                                <Grid item xs={6}><TextField value={email} onChange={(e)=>{emailChangeHandler(e.target.value)}} fullWidth type="email" /></Grid>       
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} justifyContent={'center'}>
                            <Grid container item justifyContent={'center'} mt={2} xs={6}>
                                <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={30}>Password :</Typography></Grid>
                                <Grid item xs={6}><TextField value={password} onChange={(e)=>{passwordChangeHandler(e.target.value)}} fullWidth type='password'/></Grid>       
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-around'} mt={5}>
                            <Button onClick={login} version={1} value={loginLoading ? 'Sending...' : 'Login'}/>
                        </Grid>
                    </Grid>
                </div>
            , document.getElementById('modal'))}
            {createPortal(<Backdrop closeModal={closeModal}/>, document.getElementById('backdrop'))}
        </>
    )
}
export default LoginModal;