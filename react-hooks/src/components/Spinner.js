import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core'


// eslint-disable-next-line
export function Spinner({ courses }) {
    console.log(courses)
   

    return (
        <Grid>
            <Grid item md={12}>
                <div>
                    <Typography contained='display1' align='center' gutterBottom>
                        Exercises
                    </Typography>
                    <Paper>
                        ...
                    </Paper>
                    <form >
                        ...
                     </form>
                    <Button
                        type='submit'
                        color='primary'
                    >
                        Create
                    </Button>
                </div>
            </Grid>
        </Grid >
    );
}

