import { createPortal } from 'react-dom';
import './ConfirmationModal.css'
import Backdrop from '../Backdrop/Backdrop';
import { Button, Grid, Typography } from '@mui/material';
import {AiOutlineCloseCircle} from 'react-icons/ai'

const ConfirmationModal = (props) =>{

    /////////////
    //VARIABLES//
    /////////////

    // color - success(zielony), error(czerwony)
    // fontSize - wielkość tekstu
    // text - tekst wyświetlany w tytule
    // acceptButtonText - tekst wyświetlany na buttonie do akceptacji
    // acceptButtonClick - metoda do onClick'a na buttonie do akceptacji
    // declineButtonText - tekst wyświetlany na buttonie do odmowy
    // declineButtonClick - metoda do onClick'a na buttonie do odmowy 
    // closeModal - metoda na zamknięcie modala ( 'X' plus backdrop)


    return (
        <>
            {createPortal(
                <div className={`login_modal modal_color_${props.color}`}>
                    <Grid container justifyContent={'flex-end'} pr={2} pt={1}><AiOutlineCloseCircle className='close_modal_icon' size={40} onClick={props.closeModal}/></Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item><Typography fontSize={props.fontSize} fontStyle={'bold'}>{props.text}</Typography></Grid>
                        <Grid container item justifyContent={'space-around'} mt={5}>
                            <Grid item xs={4}><Button size={'large'} variant='contained' fullWidth onClick={props.acceptButtonClick} color='success'>{props.acceptButtonText}</Button></Grid>
                            <Grid item xs={4}><Button size={'large'} variant='contained' fullWidth onClick={props.declineButtonClick} color='error'>{props.declineButtonText}</Button></Grid>
                        </Grid>
                    </Grid>
                </div>
                , document.getElementById('modal'))}
            {createPortal(<Backdrop closeModal={props.closeModal}/>, document.getElementById('backdrop'))}
        </>
    )
}
export default ConfirmationModal;