import { Grid } from "@mui/material";

const PageWrapper = (props) =>{

    return (
        <Grid container justifyContent={'center'} id={'pageWrapper'}>
            <Grid container item xs={11}>
                {props.children}
            </Grid>
        </Grid>
    )
}
export default PageWrapper;