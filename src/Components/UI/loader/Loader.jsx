import React from 'react';
import {Container, Grid, Box} from "@mui/material"
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <Container>
            <Grid container className={cl.girdLoader1} style={{height: window.innerHeight - 50}}>
                <Grid container className={cl.girdLoader2} style={{direction: 'column'}}>
                    <span className={cl.loader}></span>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;