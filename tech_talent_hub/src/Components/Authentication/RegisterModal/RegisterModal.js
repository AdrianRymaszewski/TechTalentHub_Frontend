import Backdrop from "../../BasicComponents/Backdrop/Backdrop";
import { createPortal } from "react-dom";
import {useSelector, useDispatch} from 'react-redux';
import { authSliceActions } from '../../../Store/authSlice';
import {Grid, TextField, Typography } from "@mui/material";
import useFetch from '../../../Hooks/use-fetch';
import Button from '../../BasicComponents/Button/Button';
import styles from './RegisterModal.module.css';
import { REGISTER_URL } from "../../../Constants";
import {AiOutlineCloseCircle} from 'react-icons/ai'

const RegisterModal = () =>{

    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.userData.register.email)
    const password = useSelector((state) => state.auth.userData.register.password)
    const firstName = useSelector((state) => state.auth.userData.register.firstName)
    const lastName = useSelector((state) => state.auth.userData.register.lastName)

    const {loading:registerLoading, error:registerError, sendRequest:registerFetch} = useFetch();
    
    const RegisterResponse =(response)=>{
        console.log(response)
    }
    
    const register = () =>{
        registerFetch({
            url:REGISTER_URL,
            method:'POST',
            body:{email:email, password:password, firstName:firstName, lastName:lastName}
        },
        RegisterResponse)
    }
    const emailChangeHandler = (value) =>{
        dispatch(authSliceActions.updateRegisterUserData({email:value, password:password, firstName:firstName, lastName:lastName}))
    }
    const passwordChangeHandler = (value) =>{
        dispatch(authSliceActions.updateRegisterUserData({email:email, password:value, firstName:firstName, lastName:lastName}))
    }
    const firstNameChangeHandler = (value) =>{
        dispatch(authSliceActions.updateRegisterUserData({email:email, password:password, firstName:value, lastName:lastName}))
    }
    const lastNameChangeHandler = (value) =>{
        dispatch(authSliceActions.updateRegisterUserData({email:email, password:password, firstName:firstName, lastName:value}))
    }


    const closeModal=() =>{
        dispatch(authSliceActions.triggerRegisterModal(false))
    }

    return(
        <>
            {createPortal(
                <div className={styles.register_modal}>
                                        <Grid container justifyContent={'flex-end'} pr={2} pt={2}><AiOutlineCloseCircle className='close_modal_icon' size={40} onClick={closeModal}/></Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'} mt={10}>
                        <Typography fontSize={40} mb={5}>Sign up</Typography>
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
                        <Grid container item xs={12} justifyContent={'center'}>
                            <Grid container item justifyContent={'center'} mt={2} xs={6}>
                                <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={30}>First name :</Typography></Grid>
                                <Grid item xs={6}><TextField value={firstName} onChange={(e)=>{firstNameChangeHandler(e.target.value)}} fullWidth type='text'/></Grid>       
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} justifyContent={'center'}>
                            <Grid container item justifyContent={'center'} mt={2} xs={6}>
                                <Grid container justifyContent={'right'} alignItems={'center'} item xs={6} pr={3}><Typography fontSize={30}>Last name :</Typography></Grid>
                                <Grid item xs={6}><TextField value={lastName} onChange={(e)=>{lastNameChangeHandler(e.target.value)}} fullWidth type='text'/></Grid>       
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-around'} mt={5}>
                            <Button onClick={register} version={1} value={registerLoading ? 'Sending...' : 'Sign up'}/>
                        </Grid>
                    </Grid>
                </div>
            , document.getElementById('modal'))}
            {createPortal(<Backdrop closeModal={closeModal}/>, document.getElementById('backdrop'))}
        </>
    )
}
export default RegisterModal;