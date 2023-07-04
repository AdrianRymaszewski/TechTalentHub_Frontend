import { AppBar, Box, Container, Grid, List, ListItem, Toolbar } from "@mui/material";
import logo from "../../Images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../BasicComponents/Button/Button";
import { mainColor } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../Store/authSlice";
import LoginModal from "../Authentication/LoginModal/LoginModal";
import RegisterModal from "../Authentication/RegisterModal/RegisterModal";

const midLinks = [
    { title: 'Jobs', path: '/jobs' },
    { title: 'Company', path: '/company' },
    { title: 'Buisness', path: '/business' },
    { title: 'Public', path: '/public' },
];

const listItemStyles = {
    color: 'white',
    textDecoration: 'none',
    fontSize: "1.5rem",
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'grey.400'
    }

}

const Navbar = () => {

    const dispatch = useDispatch();
    const isLoginModalOpen = useSelector(store => store.auth.isLoginModalOpen);
    const isRegisterModalOpen = useSelector(store => store.auth.isRegisterModalOpen);

    const rightLinks = [
        { title: 'login', onClick:()=>dispatch(authSliceActions.triggerLoginModal(!isLoginModalOpen)) },
        { title: 'Sign up', onClick:()=>dispatch(authSliceActions.triggerRegisterModal(!isRegisterModalOpen)) },
    ]


    const navigate = useNavigate();

    return (
        <>
                <Grid container sx={{backgroundColor:mainColor}} justifyContent={'center'} alignItems={'center'}>
                    <Grid container item justifyContent={'space-between'} alignItems={'center'} m={1} xs={11}>

                        <Grid item>
                            <img src={logo} alt="" onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
                        </Grid>
                        
                        <Grid item>
                            <List sx={{ display: "flex", fontSize: "1.5rem" }}>
                                {midLinks.map(({ title, path }) => (
                                    <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={listItemStyles}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        <Grid item mr={3}>
                            <List sx={{ display: 'flex' }}>
                                {rightLinks.map(({ title, path, onClick }) => (
                                    <Button
                                    version={1}
                                    value={title.toUpperCase()}
                                    navigate={path ? path : null}
                                    onClick={onClick ? onClick : null}
                                    >
                                    </Button>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            {isLoginModalOpen && <LoginModal/>}
            {isRegisterModalOpen && <RegisterModal/>}
        </>
    )
}
export default Navbar;