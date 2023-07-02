import { AppBar, Box, Container, List, ListItem, Toolbar } from "@mui/material";
import logo from "../../Images/logo2.png";
import { NavLink } from "react-router-dom";
import Button from "../BasicComponents/Button/Button";
import { mainColor } from "../../Constants";

const midLinks = [
    { title: 'Jobs', path: '/jobs' },
    { title: 'Company', path: '/company' },
    { title: 'Buisness', path: '/business' },
    { title: 'Public', path: '/public' },
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const toolbarStyles = {
    backgroundColor: mainColor,
    height: '109px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

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
    return (
        <AppBar sx={{backgroundColor: mainColor}}>
            <Container sx={{backgroundColor: mainColor, minWidth: '1400px'}}>
                <Toolbar sx={toolbarStyles}>
                    <Box>
                        <img src={logo} alt="" />
                    </Box>
                    <Box>
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
                    </Box>
                    <Box>
                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <Button
                                    version={1}
                                    value={title.toUpperCase()}
                                    navigate={path}
                                >
                                </Button>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar;